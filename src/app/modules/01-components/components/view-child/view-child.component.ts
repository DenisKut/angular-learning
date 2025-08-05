import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-view-child',
	standalone: true,
	template: `
		<div class="view-child-container">
			<h2>Задание 5: ViewChild/ViewChildren</h2>
			<p>Работа с дочерними элементами и компонентами</p>

			<div class="theory">
				<h3>Теория:</h3>
				<ul>
					<li>
						<strong>ViewChild</strong> - получение ссылки на дочерний
						элемент/компонент
					</li>
					<li>
						<strong>ViewChildren</strong> - получение ссылок на коллекцию
						элементов
					</li>
					<li><strong>ElementRef</strong> - прямое обращение к DOM элементу</li>
					<li><strong>TemplateRef</strong> - работа с шаблонами</li>
				</ul>
			</div>

			<div class="practice">
				<h3>Практическое применение:</h3>
				<p>Демонстрация работы с ViewChild для доступа к дочерним элементам.</p>
			</div>
		</div>
	`,
	styles: [
		`
			.view-child-container {
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
export class ViewChildComponent {}
