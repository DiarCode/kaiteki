package org.kaiteki.backend.teams.controller;

import lombok.RequiredArgsConstructor;
import org.kaiteki.backend.teams.model.dto.*;
import org.kaiteki.backend.teams.service.TeamsInvitationsService;
import org.kaiteki.backend.teams.service.TeamsService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/teams")
@RequiredArgsConstructor
public class TeamsController {
    private final TeamsService teamsService;

    @GetMapping()
    public ResponseEntity<List<TeamsDTO>> getTeams() {
        return ResponseEntity.ok(teamsService.getTeams());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeamsDTO> getTeam(@PathVariable Long id) {
        return ResponseEntity.ok(teamsService.getTeam(id));
    }

    @GetMapping("/{id}/members")
    public ResponseEntity<Page<TeamMembersDTO>> getTeamMembers(@PathVariable Long id,
                                                               @PageableDefault(sort = {"id"}, direction = Sort.Direction.DESC) Pageable pageable,
                                                               TeamMembersFilterDTO filter) {
        return ResponseEntity.ok(teamsService.getTeamMembers(id, filter, pageable));
    }

    @PostMapping()
    public void createTeam(@RequestBody CreateTeamDTO dto) {
        teamsService.createTeam(dto);
    }

    @PutMapping("/{id}")
    public void updateTeam(@PathVariable Long id, @RequestBody UpdateTeamDTO dto) {
        teamsService.updateTeam(id, dto);
    }

    @DeleteMapping("/{id}")
    public void deleteTeam(@PathVariable Long id) {
        teamsService.deleteTeam(id);
    }

    @DeleteMapping("/{teamId}/members/{teamMemberId}")
    public void deleteTeamMember(@PathVariable Long teamId, @PathVariable Long teamMemberId) {
        teamsService.deleteTeamMember(teamId, teamMemberId);
    }

    @GetMapping("/invitations/{teamId}")
    public ResponseEntity<TeamsInvitationsDTO> getTeamInvitationLink(@PathVariable Long teamId) {
        return ResponseEntity.ok(teamsService.getTeamInvitationLink(teamId));
    }

    @PostMapping("/invitations/join/{token}")
    public void joinTeamByInvitationLink(@PathVariable String token) {
        teamsService.joinTeamByInvitationToken(token);
    }
}