import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { EMPTY, Subject, catchError, switchMap, takeUntil, throwError } from 'rxjs'

import { ToastService } from 'src/app/shared/services/toast.service'

import { PostsService } from '../../services/posts.service'
import { CreatePostDialogComponent } from '../dialogs/create-post-dialog/create-post-dialog.component'

@Component({
	selector: 'app-posts-toolbar',
	templateUrl: './posts-toolbar.component.html',
	styleUrls: ['./posts-toolbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsToolbarComponent implements OnDestroy {
	private destroy$: Subject<void> = new Subject()

	constructor(
		private dialog: MatDialog,
		private postsService: PostsService,
		private toastService: ToastService,
	) {}

	ngOnDestroy() {
		this.destroy$.next()
		this.destroy$.complete()
	}

	onWriteClick(event: Event) {
		event.preventDefault()

		const dialogRef = this.dialog.open(CreatePostDialogComponent, {
			minWidth: '70%',
			minHeight: '80%',
		})

		dialogRef
			.afterClosed()
			.pipe(
				switchMap(form => {
					if (form) {
						return this.postsService.createPost(form)
					}

					return EMPTY
				}),
				catchError(err => {
					this.toastService.error('Failed to create a post')
					return throwError(() => err)
				}),
				takeUntil(this.destroy$),
			)
			.subscribe(() => {
				this.toastService.open('Successfully created a post')
				this.postsService.triggerRefreshPosts()
			})
	}
}
