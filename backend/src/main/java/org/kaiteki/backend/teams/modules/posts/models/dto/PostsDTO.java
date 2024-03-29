package org.kaiteki.backend.teams.modules.posts.models.dto;

import lombok.Builder;
import lombok.Data;

import java.time.ZonedDateTime;

@Data
@Builder
public class PostsDTO {
    private Long id;
    private String title;
    private String description;
    private String content;
    private ZonedDateTime createdDate;
    private String authorFullName;
    private Long authorMemberId;
    private Long heroImageId;
    private boolean isLiked;
}
