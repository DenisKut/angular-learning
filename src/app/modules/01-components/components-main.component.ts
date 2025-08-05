import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-components-main',
	standalone: true,
	imports: [RouterOutlet, RouterLink, RouterLinkActive],
	template: `
		<div class="module-container">
			<h1>Модуль 1: Компоненты</h1>
			<p>Изучение основ создания и использования Angular компонентов</p>

			<nav class="tasks-nav">
				<h2>Практические задания:</h2>
				<ul>
					<li>
						<a routerLink="counter" routerLinkActive="active">
							1. Counter Component - Базовый компонент с состоянием
						</a>
					</li>
					<li>
						<a routerLink="user-card" routerLinkActive="active">
							2. User Card - Компонент с Input/Output
						</a>
					</li>
					<li>
						<a routerLink="content-projection" routerLinkActive="active">
							3. Content Projection - ng-content и проекция контента
						</a>
					</li>
					<li>
						<a routerLink="lifecycle" routerLinkActive="active">
							4. Lifecycle Hooks - Жизненный цикл компонентов
						</a>
					</li>
					<li>
						<a routerLink="view-child" routerLinkActive="active">
							5. ViewChild/ViewChildren - Работа с дочерними элементами
						</a>
					</li>
				</ul>
			</nav>

			<div class="task-content">
				<router-outlet></router-outlet>
			</div>
		</div>
	`,
	styles: [
		`
			.module-container {
				padding: 20px;
				max-width: 1200px;
				margin: 0 auto;
			}

			h1 {
				color: #dd0031;
				font-size: 2.5rem;
				margin-bottom: 1rem;
			}

			.tasks-nav {
				background: #f5f5f5;
				padding: 20px;
				border-radius: 8px;
				margin: 20px 0;
			}

			.tasks-nav h2 {
				margin-top: 0;
				color: #333;
			}

			.tasks-nav ul {
				list-style: none;
				padding: 0;
				margin: 0;
			}

			.tasks-nav li {
				margin: 10px 0;
			}

			.tasks-nav a {
				display: block;
				padding: 12px 16px;
				background: white;
				color: #333;
				text-decoration: none;
				border-radius: 4px;
				border-left: 4px solid #ddd;
				transition: all 0.3s ease;
			}

			.tasks-nav a:hover {
				background: #e3f2fd;
				border-left-color: #2196f3;
			}

			.tasks-nav a.active {
				background: #e8f5e8;
				border-left-color: #4caf50;
				font-weight: 600;
			}

			.task-content {
				margin-top: 30px;
				padding: 20px;
				background: white;
				border-radius: 8px;
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			}
		`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsMainComponent {}
