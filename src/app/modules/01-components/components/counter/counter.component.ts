import { NgStyle } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	computed,
	signal
} from '@angular/core';

@Component({
	selector: 'app-counter',
	standalone: true,
	imports: [NgStyle],
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss'],
	changeDetection: ChangeDetectionStrategy.Default
})
export class CounterComponent {
	protected controlButtons = [
		new ControlItem('-'),
		new ControlItem('Reset'),
		new ControlItem('+')
	];

	protected count = signal(0);
	protected doubleCount = computed(() => this.count() ** 2);

	protected increment(): void {
		this.count.set(this.count() + 1);
	}

	protected decrement(): void {
		this.count.set(this.count() - 1);
	}

	protected reset(): void {
		this.count.set(0);
	}
}

class ControlItem {
	constructor(public title: string) {}
}
