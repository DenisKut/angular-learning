import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-services-main',
	template: `
		<div class="module-container">
			<h2>Модуль 4: Сервисы и DI</h2>
			<p>
				Изучение Dependency Injection и создание сервисов (скоро будет
				реализовано)
			</p>
		</div>
	`,
	styles: [
		`
			.module-container {
				padding: 2rem;
				text-align: center;
				background: #f8f9fa;
				border-radius: 8px;
				margin: 2rem;
			}
		`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesMainComponent {}
