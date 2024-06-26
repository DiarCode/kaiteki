import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { take } from 'rxjs'

import { TeamsService } from 'src/app/teams/services/teams.service'

import { DashboardInviteDialogComponent } from '../dialogs/dashboard-invite-dialog/dashboard-invite-dialog.component'

@Component({
	selector: 'app-dashboard-toolbar',
	templateUrl: './dashboard-toolbar.component.html',
	styleUrls: ['./dashboard-toolbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardToolbarComponent {
	currentTeam$ = this.teamsService.currentTeam$

	constructor(
		private dialog: MatDialog,
		private teamsService: TeamsService,
	) {}

	onAddNewClick(event: Event) {
		event.preventDefault()

		const dialogRef = this.dialog.open(DashboardInviteDialogComponent, {
			minWidth: '30%',
			width: '500px',
		})

		dialogRef.afterClosed().pipe(take(1)).subscribe()
	}
}
