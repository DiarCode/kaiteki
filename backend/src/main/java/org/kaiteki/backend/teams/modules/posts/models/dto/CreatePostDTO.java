package org.kaiteki.backend.teams.modules.posts.models.dto;

import lombok.Builder;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@Data
public class CreatePostDTO {
    private String title;
    private String description;
    private String content;
    private MultipartFile image;
    private Long teamId;
}
