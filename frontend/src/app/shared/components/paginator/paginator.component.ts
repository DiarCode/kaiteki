import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Pagination, PaginationDTO } from '../../models/pagination.model';

export const initialPaginationValue: PaginationDTO = {
  size: 5,
  totalPages: 20,
  totalElements: 200,
  page: 0,
};

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private _pagination: PaginationDTO = initialPaginationValue;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @Output() readonly pageInfo = new EventEmitter<Pagination>();
  @Input() resetFormSubject: Observable<boolean> = new Observable<boolean>();
  @Input() set pagination(value: PaginationDTO) {
    if (value.page === 0) {
      this.paginator.firstPage();
    }

    this._pagination.totalElements = value.totalElements;
    this._pagination.totalPages = value.totalPages;
    this._pagination.page = value.page;
    this._pagination.size = value.size;
  }

  ngOnInit(): void {
    this.paginator.page
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.pageInfo.emit({
          size: value.pageSize,
          page: value.pageIndex,
        });
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  get pagination(): PaginationDTO {
    return this._pagination;
  }
}
