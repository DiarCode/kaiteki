import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'

import Chart from 'chart.js/auto'

@Component({
	selector: 'app-overview-home',
	templateUrl: './overview-home.component.html',
	styleUrls: ['./overview-home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewHomeComponent implements OnInit {
	chart: unknown = []

	ngOnInit() {
		this.chart = new Chart('canvas-overview-tasks', {
			type: 'line',
			data: {
				labels: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
				],
				datasets: [
					{
						label: 'Monthly Task Completon',
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: false,
						borderColor: '#0a7549',
						tension: 0.1,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
			},
		})
	}
}
