import { Users } from 'src/app/auth/models/user.type'

export interface Teams {
	id: number
	name: string
	description: string
	createdDate: Date
	owner: Users
}

export interface UpdateTeamDTO {
	name?: string
	description?: string
	logo?: File
}

export interface CreateTeamDTO {
	name: string
	description: string
}
