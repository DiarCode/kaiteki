import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MeetingsSelectedDialogComponent } from '../../../../dialogs/meetings-selected-dialog/meetings-selected-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MeetingDTO } from 'src/app/teams/submodules/meetings/models/meetings.types';

@Component({
  selector: 'app-meeting-list-item',
  templateUrl: './meeting-list-item.component.html',
  styleUrls: ['./meeting-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetingListItemComponent {
  @Input() meeting: any | null = null;

  constructor(private dialog: MatDialog) {}

  onSelectMeeting(meeting: any) {
    const dialogRef = this.dialog.open(MeetingsSelectedDialogComponent, {
      data: { selectedMeeting: meeting },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
