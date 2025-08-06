import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
	selector: 'app-counter',
	standalone: true,
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
	protected count = signal(0);

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
