// export interface MeetingSignalRequestDTO {}

// export interface MeetingSignalResponseDTO {}

export interface CreateMeetingDTO {
	title: string
	description: string
	startDate: Date
	endDate: Date
	externalLink?: string
	invitedMemberIds: number[]
}

export interface UpdateMeetingDTO {
	title?: string
	description?: string
	startDate?: Date
	endDate?: Date
	invitedMemberIds?: number[]
	externalLink?: string
}
