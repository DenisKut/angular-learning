import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
	selector: 'app-counter',
	standalone: true,
	template: `
		<div class="counter-container">
			<h2>Задание 1: Counter Component</h2>
			<p>Создание базового компонента с внутренним состоянием</p>

			<div class="theory">
				<h3>Теория:</h3>
				<ul>
					<li>Создание standalone компонента</li>
					<li>Использование signals для состояния</li>
					<li>Event binding для обработки событий</li>
					<li>Interpolation для отображения данных</li>
				</ul>
			</div>

			<div class="practice">
				<h3>Практика:</h3>
				<div class="counter-demo">
					<div class="counter-display">
						<span class="counter-value">{{ count() }}</span>
					</div>
					<div class="counter-controls">
						<button (click)="decrement()" [disabled]="count() <= 0">-</button>
						<button (click)="reset()">Reset</button>
						<button (click)="increment()">+</button>
					</div>
				</div>
			</div>

			<div class="code-example">
				<h3>Код компонента:</h3>
				<pre><code>{{codeExample}}</code></pre>
			</div>
		</div>
	`,
	styles: [
		`
			.counter-container {
				padding: 20px;
			}

			.theory {
				background: #f0f8ff;
				padding: 15px;
				border-radius: 8px;
				margin: 20px 0;
			}

			.practice {
				background: #f8fff0;
				padding: 15px;
				border-radius: 8px;
				margin: 20px 0;
			}

			.counter-demo {
				text-align: center;
				margin: 20px 0;
			}

			.counter-display {
				font-size: 3rem;
				font-weight: bold;
				color: #dd0031;
				margin: 20px 0;
			}

			.counter-controls button {
				font-size: 1.5rem;
				padding: 10px 20px;
				margin: 0 10px;
				border: 2px solid #dd0031;
				background: white;
				color: #dd0031;
				border-radius: 4px;
				cursor: pointer;
				transition: all 0.3s ease;
			}

			.counter-controls button:hover:not(:disabled) {
				background: #dd0031;
				color: white;
			}

			.counter-controls button:disabled {
				opacity: 0.5;
				cursor: not-allowed;
			}

			.code-example {
				background: #f5f5f5;
				padding: 15px;
				border-radius: 8px;
				margin: 20px 0;
			}

			pre {
				background: #2d2d2d;
				color: #f8f8f2;
				padding: 15px;
				border-radius: 4px;
				overflow-x: auto;
				font-size: 0.9rem;
				line-height: 1.4;
			}
		`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
	count = signal(0);

	increment() {
		this.count.update(value => value + 1);
	}

	decrement() {
		this.count.update(value => Math.max(0, value - 1));
	}

	reset() {
		this.count.set(0);
	}

	codeExample = `@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`
    <div class="counter-display">{{ count() }}</div>
    <button (click)="decrement()">-</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increment()">+</button>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => Math.max(0, value - 1));
  }

  reset() {
    this.count.set(0);
  }
}`;
}
