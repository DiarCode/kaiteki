package org.kaiteki.backend.teams.modules.tasks.service;

import org.kaiteki.backend.shared.utils.JpaSpecificationBuilder;
import org.kaiteki.backend.teams.modules.tasks.models.dto.TaskStatusDTO;
import org.kaiteki.backend.teams.modules.tasks.models.entity.TaskStatus;
import org.kaiteki.backend.teams.modules.tasks.models.entity.TaskStatusType;
import org.kaiteki.backend.teams.modules.tasks.models.entity.Tasks;
import org.kaiteki.backend.teams.modules.tasks.repository.TaskStatusRepository;
import org.kaiteki.backend.teams.model.entity.Teams;
import org.kaiteki.backend.teams.modules.tasks.models.dto.CustomizeStatusesDTO;
import org.kaiteki.backend.teams.modules.tasks.models.dto.SaveTaskStatusesDTO;
import org.kaiteki.backend.teams.modules.tasks.models.dto.TasksFilterDTO;
import org.kaiteki.backend.teams.service.TeamsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

import static java.util.Objects.nonNull;

@Service
public class TaskStatusService {
    private TaskStatusRepository taskStatusRepository;
    private TeamsService teamsService;
    private TasksService tasksService;

    @Autowired
    public void setTeamsService(@Lazy TeamsService teamsService) {
        this.teamsService = teamsService;
    }

    @Autowired
    public void setTaskStatusRepository(TaskStatusRepository taskStatusRepository) {
        this.taskStatusRepository = taskStatusRepository;
    }

    @Autowired
    public void setTasksService(@Lazy TasksService tasksService) {
        this.tasksService = tasksService;
    }

    public List<TaskStatusDTO> getTaskStatuses(Long teamId, Boolean includeTasks, TasksFilterDTO filter) {
        JpaSpecificationBuilder<TaskStatus> filterBuilder = new JpaSpecificationBuilder<TaskStatus>()
                .joinAndEqual("team", "id", teamId)
                .orderBy("order", Sort.Direction.ASC);

        return taskStatusRepository.findAll(filterBuilder.build())
                .stream()
                .map(status -> convertToDTO(status, includeTasks, filter))
                .toList();
    }

    @Transactional
    public void saveCustomizeStatuses(Long teamId, List<SaveTaskStatusesDTO> statusesList) {
        Teams team = teamsService.getTeamById(teamId);

        statusesList.forEach(status -> {
            if (nonNull(status.getId())) {
                updateExistingTaskStatus(status);
            } else {
                saveTaskStatusFromDTO(team, status);
            }
        });
    }

    private void updateExistingTaskStatus(SaveTaskStatusesDTO status) {
        TaskStatus taskStatus = getTaskStatus(status.getId());

        taskStatus.setName(status.getName());
        taskStatus.setOrder(status.getOrder());
        taskStatus.setColor(status.getColor());

        taskStatusRepository.save(taskStatus);
    }

    private void saveTaskStatusFromDTO(Teams team, SaveTaskStatusesDTO status) {
        TaskStatus taskStatus = TaskStatus.builder()
                .color(status.getColor())
                .order(status.getOrder())
                .team(team)
                .tasks(new ArrayList<>())
                .type(status.getType())
                .name(status.getName())
                .build();

        taskStatusRepository.save(taskStatus);
    }

     public TaskStatusDTO convertToDTO(TaskStatus taskStatus, Boolean includeTasks, TasksFilterDTO filter) {
        TaskStatusDTO dto = TaskStatusDTO.builder()
                .id(taskStatus.getId())
                .name(taskStatus.getName())
                .color(taskStatus.getColor())
                .order(taskStatus.getOrder())
                .type(taskStatus.getType())
                .build();

        if (includeTasks) {
            filter.setStatusId(taskStatus.getId());
            dto.setTasks(tasksService.searchTasks(filter));
        }

        return dto;
    }

    public CustomizeStatusesDTO getCustomizeStatuses(Long teamId) {
        List<SaveTaskStatusesDTO> taskStatuses = getTaskStatuses(teamId, false, TasksFilterDTO.builder().build())
                .parallelStream().map(status -> SaveTaskStatusesDTO.builder()
                        .type(status.getType())
                        .order(status.getOrder())
                        .name(status.getName())
                        .id(status.getId())
                        .color(status.getColor())
                        .build())
                .toList();

        SaveTaskStatusesDTO openStatus = taskStatuses.parallelStream()
                .filter(status -> status.getType() == TaskStatusType.OPEN)
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to get open status"));

        SaveTaskStatusesDTO doneStatus = taskStatuses.parallelStream()
                .filter(status -> status.getType() == TaskStatusType.DONE)
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to get open status"));

        List<SaveTaskStatusesDTO> regularStatuses = taskStatuses.parallelStream()
                .filter(status -> status.getType() == TaskStatusType.REGULAR)
                .toList();

        return CustomizeStatusesDTO.builder()
                .doneStatus(doneStatus)
                .openStatus(openStatus)
                .regularStatuses(regularStatuses)
                .build();
    }

    public void setupTeamDefaultStatuses(Teams team) {
        saveTaskStatusFromDTO(team, SaveTaskStatusesDTO.builder()
                .color("#36A41D")
                .type(TaskStatusType.OPEN)
                .order(1)
                .name("Open")
                .build());

        saveTaskStatusFromDTO(team, SaveTaskStatusesDTO.builder()
                .color("#5b738b")
                .type(TaskStatusType.REGULAR)
                .order(2)
                .name("In Progress")
                .build());

        saveTaskStatusFromDTO(team, SaveTaskStatusesDTO.builder()
                .color("#FA4F96")
                .type(TaskStatusType.DONE)
                .order(3)
                .name("Done")
                .build());
    }

    @Transactional
    public void deleteStatus(Long teamId, Long statusId) {
        Teams team = teamsService.getTeamById(teamId);

        TaskStatus status = getTaskStatus(statusId);
        if (!status.getType().equals(TaskStatusType.REGULAR)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Can not delete open or done status");
        }

        TaskStatus openStatus = taskStatusRepository.findByTeamAndType(team, TaskStatusType.OPEN)
                .stream()
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task status not found"));

        List<Tasks> deletedStatusTasks = status.getTasks()
                .stream().peek(task -> task.setStatus(openStatus)).toList();

        tasksService.saveAll(deletedStatusTasks);
        taskStatusRepository.delete(status);
        reorderTaskStatuses(teamId);
    }

    public TaskStatus getTaskStatus(Long statusId) {
        return taskStatusRepository.findById(statusId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task status not found"));
    }

    @Transactional
    public void reorderTaskStatuses(Long teamId) {
        JpaSpecificationBuilder<TaskStatus> filterBuilder = new JpaSpecificationBuilder<TaskStatus>()
                .joinAndEqual("team", "id", teamId)
                .orderBy("order", Sort.Direction.ASC);

        List<TaskStatus> statuses = taskStatusRepository.findAll(filterBuilder.build());

        int order = 1;
        for (TaskStatus status : statuses) {
            status.setOrder(order++);
        }

        taskStatusRepository.saveAll(statuses);
    }

    public List<TaskStatus> getTaskStatusByTeamAndType(Teams team, TaskStatusType type) {
        return taskStatusRepository.findByTeamAndType(team, type);
    }
}
