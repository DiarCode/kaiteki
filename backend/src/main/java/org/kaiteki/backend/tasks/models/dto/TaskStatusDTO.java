package org.kaiteki.backend.tasks.models.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class TaskStatusDTO {
    private Long id;
    private Long name;
    private String color;
    private Integer order;
    private List<TasksDTO> tasks;
}