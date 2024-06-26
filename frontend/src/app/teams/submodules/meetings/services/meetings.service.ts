import { Injectable } from '@angular/core'

import { BehaviorSubject, Subject, switchMap, throwError } from 'rxjs'

import { PageableRequest } from 'src/app/shared/models/pagination.model'

import { TeamsService } from 'src/app/teams/services/teams.service'

import { CreateMeetingDTO, UpdateMeetingDTO } from '../models/meetings.dto'
import { MeetingsDTO, MeetingsFilter } from '../models/meetings.types'

import { MeetingsApiService } from './meetings-api.service'

@Injectable({
	providedIn: 'root',
})
export class MeetingsService {
	private refetchMeetingsSubject = new Subject<void>()
	private currentMeetingRoomSubject = new BehaviorSubject<MeetingsDTO | null>(null)

	refetchMeetings$ = this.refetchMeetingsSubject.asObservable()
	currentMeetingRoom$ = this.currentMeetingRoomSubject.asObservable()

	constructor(
		private meetingsApiService: MeetingsApiService,
		private teamsService: TeamsService,
	) {}

	refetchMeetings() {
		this.refetchMeetingsSubject.next()
	}

	setCurrentMeetingRoom(meetingRoom: MeetingsDTO | null) {
		this.currentMeetingRoomSubject.next(meetingRoom)
	}

	getMeetings(filter: MeetingsFilter, pageable: PageableRequest) {
		return this.teamsService.currentTeam$.pipe(
			switchMap(team => {
				if (team) {
					return this.meetingsApiService.getMeetings(team.id, filter, pageable)
				}

				return throwError(() => Error('No current team'))
			}),
		)
	}

	getMeeting(meetingId: number) {
		return this.teamsService.currentTeam$.pipe(
			switchMap(team => {
				if (team) {
					return this.meetingsApiService.getMeeting(team.id, meetingId)
				}

				return throwError(() => Error('No current team'))
			}),
		)
	}

	createMeeting(dto: CreateMeetingDTO) {
		return this.teamsService.currentTeam$.pipe(
			switchMap(team => {
				if (team) {
					return this.meetingsApiService.createMeeting(team.id, dto)
				}

				return throwError(() => Error('No current team'))
			}),
		)
	}

	deleteMeeting(meetingId: number) {
		return this.teamsService.currentTeam$.pipe(
			switchMap(team => {
				if (team) {
					return this.meetingsApiService.deleteMeeting(team.id, meetingId)
				}

				return throwError(() => Error('No current team'))
			}),
		)
	}

	joinMeeting(meetingId: number) {
		return this.teamsService.currentTeam$.pipe(
			switchMap(team => {
				if (team) {
					return this.meetingsApiService.joinMeeting(team.id, meetingId)
				}

				return throwError(() => Error('No current team'))
			}),
		)
	}

	leaveMeeting(meetingId: number) {
		return this.teamsService.currentTeam$.pipe(
			switchMap(team => {
				if (team) {
					return this.meetingsApiService.leaveMeeting(team.id, meetingId)
				}

				return throwError(() => Error('No current team'))
			}),
		)
	}

	updateMeeting(meetingId: number, dto: UpdateMeetingDTO) {
		return this.teamsService.currentTeam$.pipe(
			switchMap(team => {
				if (team) {
					return this.meetingsApiService.updateMeeting(team.id, meetingId, dto)
				}

				return throwError(() => Error('No current team'))
			}),
		)
	}
}
