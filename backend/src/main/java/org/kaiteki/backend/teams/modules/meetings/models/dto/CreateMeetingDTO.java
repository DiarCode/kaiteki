package org.kaiteki.backend.teams.modules.meetings.models.dto;

import lombok.Data;

import java.time.ZonedDateTime;
import java.util.Set;

@Data
public class CreateMeetingDTO {
    private String title;
    private String description;
    private ZonedDateTime startDate;
    private ZonedDateTime endDate;
    private Long teamId;
    private String externalLink;
    private Set<Long> invitedMemberIds;
}
