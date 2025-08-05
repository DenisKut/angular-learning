import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-directives-main',
	template: `
		<div class="module-container">
			<h2>Модуль 2: Директивы</h2>
			<p>Создание пользовательских директив (скоро будет реализовано)</p>
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
export class DirectivesMainComponent {}
