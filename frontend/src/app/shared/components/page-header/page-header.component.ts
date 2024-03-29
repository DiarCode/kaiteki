import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

import { PageHeaderService } from 'src/app/shared/components/page-header/page-header.service'

@Component({
	selector: 'app-page-header',
	templateUrl: './page-header.component.html',
	styleUrls: ['./page-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
	@Input() set value(v: string) {
		this.pageHeaderService.changeHeader(v)
	}

	constructor(private pageHeaderService: PageHeaderService) {}
}
