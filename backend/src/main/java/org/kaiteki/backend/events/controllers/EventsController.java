package org.kaiteki.backend.events.controllers;

import lombok.RequiredArgsConstructor;
import org.kaiteki.backend.events.models.dto.EventsDTO;
import org.kaiteki.backend.events.services.EventsService;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/events")
@RequiredArgsConstructor
public class EventsController {
    private final EventsService eventsService;

    @GetMapping()
    public List<EventsDTO> getAllEvents() {
        return eventsService.getAllEvents();
    }

    @GetMapping("/teams/{teamId}")
    public Page<EventsDTO> getAllEventsByTeam(@PathVariable Long teamId, @PageableDefault(sort = { "id" }, direction = Sort.Direction.DESC) Pageable pageable) {
        return eventsService.getAllEventsByTeam(teamId, pageable);
    }
}
