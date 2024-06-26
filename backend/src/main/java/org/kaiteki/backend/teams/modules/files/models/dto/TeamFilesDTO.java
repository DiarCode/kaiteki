package org.kaiteki.backend.teams.modules.files.models.dto;

import lombok.Builder;
import lombok.Data;

import java.time.ZonedDateTime;

@Builder
@Data
public class TeamFilesDTO {
    private Long id;
    private Long fileId;
    private String guid;
    private String filename;
    private String contentType;
    private Long size;
    private ZonedDateTime createdDate;
    private String description;
    private Long authorTeamMemberId;
}
