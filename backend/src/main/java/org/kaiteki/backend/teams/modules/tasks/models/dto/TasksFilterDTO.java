package org.kaiteki.backend.teams.modules.tasks.models.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TasksFilterDTO {
    private Long statusId;
    private String searchValue;
    private Long executorId;
}
