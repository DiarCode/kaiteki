package org.kaiteki.backend.teams.model.dto;

import lombok.Builder;
import lombok.Data;
import org.kaiteki.backend.users.models.Users;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@Builder
public class TeamsDTO {
        private Long id;
        private String name;
        private LocalDateTime createdDate;
        private Users owner;
}
