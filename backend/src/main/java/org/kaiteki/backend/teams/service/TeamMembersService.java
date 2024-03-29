package org.kaiteki.backend.teams.service;

import org.apache.commons.lang3.StringUtils;
import org.kaiteki.backend.auth.service.CurrentSessionService;
import org.kaiteki.backend.teams.model.entity.MemberActivities;
import org.kaiteki.backend.shared.utils.JpaSpecificationBuilder;
import org.kaiteki.backend.teams.model.entity.TeamMembers;
import org.kaiteki.backend.teams.model.entity.Teams;
import org.kaiteki.backend.teams.model.dto.TeamMembersDTO;
import org.kaiteki.backend.teams.model.dto.TeamMembersFilterDTO;
import org.kaiteki.backend.teams.repository.TeamMembersRepository;
import org.kaiteki.backend.users.models.enitities.Users;
import org.kaiteki.backend.users.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.ZonedDateTime;
import java.util.*;

@Service
public class TeamMembersService {
    private TeamMembersRepository teamMembersRepository;
    private MemberActivitiesService activitiesService;
    private TeamsService teamsService;
    private UsersService usersService;
    private CurrentSessionService currentSessionService;

    @Autowired
    public void setCurrentSessionService(CurrentSessionService currentSessionService) {
        this.currentSessionService = currentSessionService;
    }

    @Autowired
    public void setActivitiesService(MemberActivitiesService activitiesService) {
        this.activitiesService = activitiesService;
    }

    @Autowired
    public void setTeamMembersRepository(TeamMembersRepository teamMembersRepository) {
        this.teamMembersRepository = teamMembersRepository;
    }

    @Autowired
    public void setTeamsService(@Lazy TeamsService teamsService) {
        this.teamsService = teamsService;
    }

    @Autowired
    public void setUsersService(UsersService usersService) {
        this.usersService = usersService;
    }

    public TeamMembers createTeamMember(Teams team, Users user, String position) {
        TeamMembers teamMembers = teamMembersRepository.save(TeamMembers.builder()
                .joinedDate(ZonedDateTime.now())
                .position(position)
                .team(team)
                .user(user)
                .activities(Collections.emptyList())
                .build()
        );

        activitiesService.createActivity(teamMembers);

        return teamMembers;
    }

    public void deleteTeamMember(Long teamMemberId) {
        teamMembersRepository.deleteById(teamMemberId);
    }

    public TeamMembersDTO convertToDTO(TeamMembers teamMember) {
        Users user = teamMember.getUser();
        MemberActivities lastActivity = activitiesService.getLastActivity(teamMember);

        return TeamMembersDTO.builder()
                .email(user.getEmail())
                .fullName(user.getFirstname() + " " + user.getLastname())
                .shortenFullName(user.getFirstname() + " " + user.getLastname().charAt(0) + ".")
                .firstname(user.getFirstname())
                .lastname(user.getLastname())
                .performance(lastActivity.getPerformance())
                .position(teamMember.getPosition())
                .joinedDate(teamMember.getJoinedDate())
                .id(teamMember.getId())
                .build();
    }

    public boolean containsUserInTeam(Long userId, Long teamId) {
         return teamMembersRepository.countUsersInTeam(userId, teamId) > 0;
    }

    public TeamMembers getTeamMemberById(Long teamMemberId) {
        return teamMembersRepository.findById(teamMemberId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team member not found"));
    }

    public List<TeamMembers> getAllTeamMembersByIds(Iterable<Long> membersIds) {
        return teamMembersRepository.findAllById(membersIds);
    }

    public Page<TeamMembersDTO> search(Teams team, TeamMembersFilterDTO filter, Pageable pageable) {
        JpaSpecificationBuilder<TeamMembers> filterBuilder = new JpaSpecificationBuilder<TeamMembers>()
                .joinAndEqual("team", "id", team.getId());

        if (!StringUtils.isEmpty(filter.getSearchValue())) {
            String searchValue = filter.getSearchValue();

            Specification<TeamMembers> positionFilterSpec = new JpaSpecificationBuilder<TeamMembers>()
                    .like( "position", searchValue)
                    .build();

            Map<String, Object> userFilterMap = new HashMap<>();
            userFilterMap.put("firstname", searchValue);
            userFilterMap.put("lastname", searchValue);
            userFilterMap.put("email", searchValue);

            Specification<TeamMembers> userFilterSpec = new JpaSpecificationBuilder<TeamMembers>()
                    .orMultipleJoinLike(List.of("user"), userFilterMap)
                    .build();

            Specification<TeamMembers> combinedSearchValueSpec = Specification.where(positionFilterSpec)
                    .or(userFilterSpec);

            filterBuilder.addSpecification(combinedSearchValueSpec);
        }

        return teamMembersRepository
                .findAll(filterBuilder.build(), pageable)
                .map(this::convertToDTO);
    }

    public List<TeamMembersDTO> getAll(Teams team, boolean excludeCurrentMember) {
        JpaSpecificationBuilder<TeamMembers> filterBuilder = new JpaSpecificationBuilder<TeamMembers>()
                .joinAndEqual("team", "id", team.getId());

        if (excludeCurrentMember) {
            Users currentUser = currentSessionService.getCurrentUser();
            TeamMembers currentTeamMember = getTeamMemberByTeamAndUser(team, currentUser);

            filterBuilder.notEqual("id", currentTeamMember.getId());
        }

        return teamMembersRepository
                .findAll(filterBuilder.build())
                .stream()
                .map(this::convertToDTO)
                .toList();
    }

    public TeamMembersDTO getTeamMemberDTOByUserId(Teams team, Users user) {
        return teamMembersRepository.findByTeamAndUser(team, user)
                .map(this::convertToDTO)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team member not found"));
    }

    public TeamMembers getTeamMemberByTeamAndUser(Teams team, Users user) {
        return teamMembersRepository.findByTeamAndUser(team, user)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team member not found"));
    }

    public TeamMembers getCurrentTeamMember(Teams team) {
        Users user = currentSessionService.getCurrentUser();
        return getTeamMemberByTeamAndUser(team, user);
    }

    public TeamMembers getCurrentTeamMember(Long teamId) {
        Users user = currentSessionService.getCurrentUser();
        Teams team = teamsService.getTeamById(teamId);
        return getTeamMemberByTeamAndUser(team, user);
    }

    public TeamMembers getTeamMemberByTeamAndUser(Long teamId, Long userId) {
        Users user = usersService.getById(userId);
        Teams team = teamsService.getTeamById(teamId);

        return teamMembersRepository.findByTeamAndUser(team, user)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Team member not found"));
    }
}
