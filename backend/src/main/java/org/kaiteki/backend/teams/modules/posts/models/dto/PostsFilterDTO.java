package org.kaiteki.backend.teams.modules.posts.models.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PostsFilterDTO {
    private String searchValue;
}
