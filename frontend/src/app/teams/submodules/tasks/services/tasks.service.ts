import { TasksApiService } from './tasks-api.service';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  catchError,
  switchMap,
  take,
  throwError,
} from 'rxjs';
import { TeamsService } from 'src/app/teams/services/teams.service';
import { SaveTaskStatusDTO } from '../models/customize-task.dto';
import { CreateTaskDTO } from '../models/create-task.dto';
import { UpdateTaskDTO } from '../models/update-task.dto';
import { CreateTaskNotesDTO } from '../models/task-notes.dto';
import { TasksFilterDTO } from '../models/tasks-filter.dto';

@Injectable({
  providedIn: 'root',
})
export class TasksService implements OnDestroy {
  private refreshSubject = new Subject<void>();
  refreshTasksState$ = this.refreshSubject.asObservable();

  constructor(
    private teamsService: TeamsService,
    private tasksApiService: TasksApiService
  ) {}

  ngOnDestroy(): void {
    this.refreshSubject.next();
    this.refreshSubject.complete();
  }

  public deleteTaskById(taskId: number) {
    return this.tasksApiService.deleteTaskById(taskId);
  }

  public getStatusesWithTasks(filter: TasksFilterDTO) {
    return this.teamsService.currentTeam$.pipe(
      switchMap((team) => {
        if (team) {
          return this.tasksApiService.getStatusesWithTasks(team.id, filter);
        }

        return throwError(() => Error('No current team'));
      })
    );
  }

  public getStatusesWithoutTasks() {
    return this.teamsService.currentTeam$.pipe(
      switchMap((team) => {
        if (team) {
          return this.tasksApiService.getStatusesWithoutTasks(team.id);
        }

        return throwError(() => Error('No current team'));
      })
    );
  }

  public getCustomizeStatuses() {
    return this.teamsService.currentTeam$.pipe(
      switchMap((team) => {
        if (team) {
          return this.tasksApiService.getCustomizeStatuses(team.id);
        }

        return throwError(() => Error('No current team'));
      })
    );
  }

  public saveCustomizeStatuses(dto: SaveTaskStatusDTO[]) {
    return this.teamsService.currentTeam$.pipe(
      switchMap((team) => {
        if (team) {
          return this.tasksApiService.saveCustomizeStatuses(team.id, dto);
        }

        return throwError(() => Error('No current team'));
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  public createTask(dto: CreateTaskDTO) {
    return this.teamsService.currentTeam$.pipe(
      switchMap((team) => {
        if (team) {
          return this.tasksApiService.createTask(team.id, dto);
        }

        return throwError(() => Error('No current team'));
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  public getTaskById(taskId: number) {
    return this.tasksApiService.getTaskById(taskId);
  }

  public updateTask(taskId: number, dto: UpdateTaskDTO) {
    return this.tasksApiService.updateTask(taskId, dto);
  }

  public deleteStatus(statusId: number) {
    return this.teamsService.currentTeam$.pipe(
      switchMap((team) => {
        if (team) {
          return this.tasksApiService.deleteStatus(team.id, statusId);
        }

        return throwError(() => Error('No current team'));
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  public getTaskNotes(taskId: number) {
    return this.tasksApiService.getTaskNotes(taskId);
  }

  public deleteTaskNote(noteId: number) {
    return this.tasksApiService.deleteTaskNote(noteId);
  }

  public createTaskNote(taskId: number, dto: CreateTaskNotesDTO) {
    return this.teamsService.currentTeam$.pipe(
      switchMap((team) => {
        if (team) {
          return this.tasksApiService.createTaskNote(taskId, team.id, dto);
        }

        return throwError(() => Error('No current team'));
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  public triggerRefreshTasks() {
    this.refreshSubject.next();
  }
}
