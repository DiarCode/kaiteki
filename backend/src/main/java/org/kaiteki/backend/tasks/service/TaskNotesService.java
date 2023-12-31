package org.kaiteki.backend.tasks.service;

import lombok.RequiredArgsConstructor;
import org.kaiteki.backend.auth.service.CurrentSessionService;
import org.kaiteki.backend.shared.utils.JpaSpecificationBuilder;
import org.kaiteki.backend.shared.utils.UserFormattingUtils;
import org.kaiteki.backend.tasks.models.entity.TaskNotes;
import org.kaiteki.backend.tasks.models.entity.Tasks;
import org.kaiteki.backend.tasks.models.dto.CreateTaskNoteDTO;
import org.kaiteki.backend.tasks.models.dto.TaskNotesDTO;
import org.kaiteki.backend.tasks.repository.TaskNotesRepository;
import org.kaiteki.backend.teams.model.TeamMembers;
import org.kaiteki.backend.teams.service.TeamMembersService;
import org.kaiteki.backend.users.models.Users;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskNotesService {
    private final TaskNotesRepository taskNotesRepository;
    private final CurrentSessionService currentSessionService;
    private final TeamMembersService teamMembersService;
    private final TasksService tasksService;


    public TaskNotes getTaskNote(Long id) {
        return taskNotesRepository.findById(id).orElseThrow(() -> new RuntimeException("Task note not found"));
    }
    public List<TaskNotesDTO> getTaskNotesByTaskId(Long taskId) {
        JpaSpecificationBuilder<TaskNotes> filterBuilder = new JpaSpecificationBuilder<TaskNotes>()
                .orderBy("createdDate", Sort.Direction.DESC)
                .joinAndEqual("task", "id", taskId);

        return taskNotesRepository.findAll(filterBuilder.build())
                .stream()
                .map(this::convertToDTO)
                .toList();
    }

    @Transactional
    public void createTaskNote(CreateTaskNoteDTO dto) {
       Users currentUser = currentSessionService.getCurrentUser();
       Tasks task = tasksService.getTask(dto.getTaskId());
       TeamMembers teamMember = teamMembersService.getTeamMemberByTeamAndUser(dto.getTeamId(), currentUser.getId());

       TaskNotes taskNote = TaskNotes.builder()
               .task(task)
               .content(dto.getContent())
               .createdDate(LocalDateTime.now())
               .teamMember(teamMember)
               .build();

       taskNotesRepository.save(taskNote);
    }

    private TaskNotesDTO convertToDTO(TaskNotes taskNote) {
        TeamMembers teamMember = taskNote.getTeamMember();
        Users user = teamMember.getUser();
        String fullName = UserFormattingUtils.getFullName(user);

        return TaskNotesDTO.builder()
                .id(taskNote.getId())
                .authorFullName(fullName)
                .content(taskNote.getContent())
                .createdDate(taskNote.getCreatedDate())
                .teamMemberId(teamMember.getId())
                .build();
    }

    @Transactional
    public void deleteTaskNote(Long noteId) {
        Users currentUser = currentSessionService.getCurrentUser();
        TaskNotes taskNote = getTaskNote(noteId);

        TeamMembers noteAuthorTeamMember = taskNote.getTeamMember();
        Users noteAuthorUser = noteAuthorTeamMember.getUser();

        if (!noteAuthorUser.getId().equals(currentUser.getId())) {
            throw new RuntimeException("The note author is not the current user");
        }

        taskNotesRepository.deleteById(taskNote.getId());
    }
}
