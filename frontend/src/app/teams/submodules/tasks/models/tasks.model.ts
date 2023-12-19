import { TeamMembersDTO } from 'src/app/teams/models/team-members.model';

export enum TaskPriority {
  CRITICAL = 'CRITICAL',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

export interface Task {
  id: number;
  title: string;
  content: string;
  description: string;
  endDate: Date;
  startDate: Date;
  priority: TaskPriority;
  completed: boolean;
  status: TaskStatus;
  assignedMember: TeamMembersDTO;
}

export interface TaskStatus {
  id: number;
  name: string;
  color: string;
  order: number;
  tasks: Task[];
}
