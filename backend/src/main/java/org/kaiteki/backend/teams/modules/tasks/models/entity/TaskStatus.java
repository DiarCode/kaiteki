package org.kaiteki.backend.teams.modules.tasks.models.entity;

import jakarta.persistence.*;
import lombok.*;
import org.kaiteki.backend.shared.entity.BaseEntity;
import org.kaiteki.backend.teams.model.entity.Teams;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode(callSuper = true, exclude = {"team", "tasks"})
@Table(name = "task_status")
public class TaskStatus extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "color", nullable = false)
    private String color;

    @Column(name = "display_order", nullable = false)
    private Integer order;

    @Column(name = "type", nullable = false)
    @Enumerated(EnumType.STRING)
    private TaskStatusType type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id")
    private Teams team;

    @OneToMany(mappedBy = "status")
    private List<Tasks> tasks;
}
