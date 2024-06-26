package org.kaiteki.backend.teams.modules.chats.models.entity;

import jakarta.persistence.*;
import lombok.*;
import org.kaiteki.backend.shared.entity.BaseEntity;
import org.kaiteki.backend.teams.modules.chats.models.enums.ChatRoomsType;
import org.kaiteki.backend.files.model.AppFiles;
import org.kaiteki.backend.teams.model.entity.TeamMembers;
import org.kaiteki.backend.teams.model.entity.Teams;

import java.time.ZonedDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EqualsAndHashCode(callSuper = true, exclude = {"chatMembers", "team", "creatorTeamMember"})
@Table(name = "chat_rooms")
public class ChatRooms extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "type", nullable = false)
    @Enumerated(EnumType.STRING)
    private ChatRoomsType type;

    @OneToOne
    @JoinColumn(name = "icon_id")
    private AppFiles iconFile;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "chat_room_members",
            joinColumns = @JoinColumn(name = "chat_room_id"),
            inverseJoinColumns = @JoinColumn(name = "member_id")
    )
    private List<TeamMembers> chatMembers;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id", nullable = false)
    private Teams team;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_member_id")
    private TeamMembers creatorTeamMember;
}
