import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { Subject, catchError, startWith, switchMap, take, tap, throwError } from 'rxjs'

import { ToastService } from 'src/app/shared/services/toast.service'

import { GithubService } from '../../services/github.service'

@Component({
	selector: 'app-github-dashboard',
	templateUrl: './github-dashboard.component.html',
	styleUrl: './github-dashboard.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubDashboardComponent {
	private refreshReposSubject = new Subject<void>()

	formGroup = new FormGroup({
		username: new FormControl<string | undefined>(undefined, [Validators.required]),
	})

	credentials$ = this.githubService.getCredentials().pipe(
		tap(credentials => this.formGroup.patchValue({ username: credentials.githubUsername })),
		catchError(err => {
			this.toastService.error('Enter the GitHub username')
			return throwError(() => err)
		}),
	)

	repos$ = this.refreshReposSubject.asObservable().pipe(
		startWith([]),
		switchMap(() =>
			this.githubService.getRepos().pipe(
				catchError(err => {
					this.toastService.error('Failed to get user repositories')
					return throwError(() => err)
				}),
			),
		),
	)

	reposSkeletons = new Array(10).fill('')

	constructor(
		private toastService: ToastService,
		private githubService: GithubService,
		private cd: ChangeDetectorRef,
	) {}

	saveUsername() {
		const { username } = this.formGroup.getRawValue()

		if (username) {
			this.githubService
				.saveCredentials({ githubUsername: username })
				.pipe(
					catchError(err => {
						this.toastService.error('Failed to save the usernames')
						return throwError(() => err)
					}),
					take(1),
				)
				.subscribe(() => {
					this.toastService.open('Saved the username')
					this.refreshReposSubject.next()
				})
		}
	}
}
