import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-lifecycle',
	standalone: true,
	template: `
		<div class="lifecycle-container">
			<h2>Задание 4: Component Lifecycle</h2>
			<p>Изучение жизненного цикла Angular компонентов</p>

			<div class="theory">
				<h3>Хуки жизненного цикла:</h3>
				<ul>
					<li><strong>OnInit</strong> - инициализация компонента</li>
					<li><strong>OnChanges</strong> - изменение входных свойств</li>
					<li><strong>OnDestroy</strong> - уничтожение компонента</li>
					<li>
						<strong>AfterViewInit</strong> - после инициализации представления
					</li>
				</ul>
			</div>

			<div class="practice">
				<h3>Практическое применение:</h3>
				<p>
					Компонент демонстрирует использование основных хуков жизненного цикла.
				</p>
				<p>Проверьте консоль браузера для логов жизненного цикла.</p>
			</div>
		</div>
	`,
	styles: [
		`
			.lifecycle-container {
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
		`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifecycleComponent {}
