package org.kaiteki.backend.tasks.service;

import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.kaiteki.backend.auth.service.CurrentSessionService;
import org.kaiteki.backend.shared.utils.JpaSpecificationBuilder;
import org.kaiteki.backend.tasks.models.entity.TaskStatus;
import org.kaiteki.backend.tasks.models.entity.TaskStatusType;
import org.kaiteki.backend.tasks.models.entity.Tasks;
import org.kaiteki.backend.tasks.models.dto.*;
import org.kaiteki.backend.tasks.repository.TasksRepository;
import org.kaiteki.backend.teams.model.TeamMembers;
import org.kaiteki.backend.teams.model.Teams;
import org.kaiteki.backend.teams.model.dto.TeamMembersDTO;
import org.kaiteki.backend.teams.service.TeamMembersService;
import org.kaiteki.backend.teams.service.TeamsService;
import org.kaiteki.backend.users.models.Users;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static java.util.Objects.isNull;

@RequiredArgsConstructor
@Service
public class TasksService {
    private final TasksRepository tasksRepository;
    private final TeamsService teamsService;
    private final TeamMembersService teamMembersService;
    private final CurrentSessionService currentSessionService;
    private final TaskStatusService taskStatusService;


    public List<TasksDTO> searchTasks(TasksFilterDTO filter) {
        JpaSpecificationBuilder<Tasks> filterBuilder = new JpaSpecificationBuilder<Tasks>()
                .joinAndEqual("status", "id", filter.getStatusId())
                .joinAndEqual("executorMember", "id", filter.getExecutorId());

        if (StringUtils.isNotEmpty(filter.getSearchValue())) {
            String searchTerm = filter.getSearchValue();
            Map<String, String> searchTermMap = new HashMap<>();
            searchTermMap.put("title", searchTerm);
            searchTermMap.put("description", searchTerm);
            searchTermMap.put("tag", searchTerm);

            filterBuilder.orLike(searchTermMap);
        }

        return tasksRepository.findAll(filterBuilder.build())
                .stream()
                .map(this::convertToDTO)
                .toList();
    }


    public TasksDTO getTaskDTO(Long id) {
        return tasksRepository.findById(id)
                .map(this::convertToDTO)
                .orElseThrow(() -> new RuntimeException("Task not found"));
    }

    public Tasks getTask(Long id) {
        return tasksRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));
    }

    @Transactional
    public void createTask(Long teamId, CreateTaskDTO dto) {
        Teams team = teamsService.getTeam(teamId);

        TeamMembers executorMember = null;
        if (!isNull(dto.getExecutorId())) {
            executorMember = teamMembersService.getTeamMemberById(dto.getExecutorId());
        }

        Users currentUser = currentSessionService.getCurrentUser();
        TeamMembers currentTeamMember = teamMembersService.getTeamMemberByTeamAndUser(team, currentUser);

        TaskStatus status = taskStatusService.getTaskStatus(dto.getStatusId());

        Tasks task = Tasks.builder()
                .executorMember(executorMember)
                .team(team)
                .title(dto.getTitle())
                .endDate(dto.getEndDate())
                .priority(dto.getPriority())
                .status(status)
                .tag(dto.getTag())
                .completed(status.getType().equals(TaskStatusType.DONE))
                .startDate(dto.getStartDate())
                .content(dto.getContent())
                .description(dto.getDescription())
                .createdMember(currentTeamMember)
                .build();

        tasksRepository.save(task);
    }

    public TasksDTO convertToDTO(Tasks task) {
        TaskStatus taskStatus = task.getStatus();
        TaskStatusDTO taskStatusDTO = TaskStatusDTO.builder()
                .tasks(null)
                .name(taskStatus.getName())
                .order(taskStatus.getOrder())
                .color(taskStatus.getColor())
                .id(taskStatus.getId())
                .type(taskStatus.getType())
                .build();

        TeamMembersDTO executorTeamMembersDTO = null;
        if (!isNull(task.getExecutorMember())) {
            executorTeamMembersDTO = teamMembersService.convertToTeamMembersDTO(task.getExecutorMember());
        }

        TeamMembersDTO createdTeamMemberDTO = teamMembersService.convertToTeamMembersDTO(task.getCreatedMember());;


        return TasksDTO.builder()
                .id(task.getId())
                .title(task.getTitle())
                .status(taskStatusDTO)
                .description(task.getDescription())
                .content(task.getContent())
                .priority(task.getPriority())
                .endDate(task.getEndDate())
                .startDate(task.getStartDate())
                .executorMember(executorTeamMembersDTO)
                .createdMember(createdTeamMemberDTO)
                .tag(task.getTag())
                .completed(task.getCompleted())
                .build();
    }

    public List<Tasks> saveAll(List<Tasks> tasks) {
        return tasksRepository.saveAll(tasks);
    }

    public void updateTask(Long taskId, UpdateTaskDTO dto) {
        Tasks task = getTask(taskId);

        if (dto.getTitle() != null) {
            task.setTitle(dto.getTitle());
        }
        if (dto.getContent() != null) {
            task.setContent(dto.getContent());
        }
        if (dto.getDescription() != null) {
            task.setDescription(dto.getDescription());
        }
        if (dto.getTag() != null) {
            task.setTag(dto.getTag());
        }
        if (dto.getEndDate() != null) {
            task.setEndDate(dto.getEndDate());
        }
        if (dto.getStartDate() != null) {
            task.setStartDate(dto.getStartDate());
        }
        if (dto.getPriority() != null) {
            task.setPriority(dto.getPriority());
        }
        if (dto.getStatusId() != null) {
            TaskStatus status = taskStatusService.getTaskStatus(dto.getStatusId());
            task.setStatus(status);
            task.setCompleted(status.getType().equals(TaskStatusType.DONE));
        }
        if (dto.getExecutorId() != null) {
            TeamMembers teamMember = teamMembersService.getTeamMemberById(dto.getExecutorId());
            task.setExecutorMember(teamMember);
        }

        tasksRepository.save(task);
    }

    public void deleteTask(Long taskId) {
        this.tasksRepository.deleteById(taskId);
    }
}
