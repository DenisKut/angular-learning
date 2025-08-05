import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-card',
	standalone: true,
	template: `
		<div class="card">
			<header class="card-header">
				<ng-content select="[card-header]"></ng-content>
			</header>
			<main class="card-body">
				<ng-content></ng-content>
			</main>
			<footer class="card-footer">
				<ng-content select="[card-footer]"></ng-content>
			</footer>
		</div>
	`,
	styles: [
		`
			.card {
				border: 1px solid #ddd;
				border-radius: 8px;
				overflow: hidden;
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			}

			.card-header {
				background: #f8f9fa;
				padding: 15px;
				border-bottom: 1px solid #ddd;
			}

			.card-body {
				padding: 15px;
			}

			.card-footer {
				background: #f8f9fa;
				padding: 15px;
				border-top: 1px solid #ddd;
				text-align: right;
			}

			.card-footer button {
				margin-left: 10px;
				padding: 8px 16px;
				border: 1px solid #ddd;
				border-radius: 4px;
				background: white;
				cursor: pointer;
			}

			.card-footer button:hover {
				background: #e9ecef;
			}
		`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {}

@Component({
	selector: 'app-modal',
	standalone: true,
	template: `
		<div class="modal-backdrop">
			<div class="modal">
				<header class="modal-header">
					<ng-content select="[modal-title]"></ng-content>
				</header>
				<main class="modal-body">
					<ng-content></ng-content>
				</main>
				<footer class="modal-footer">
					<ng-content select="[modal-actions]"></ng-content>
				</footer>
			</div>
		</div>
	`,
	styles: [
		`
			.modal-backdrop {
				background: rgba(0, 0, 0, 0.1);
				padding: 20px;
				border-radius: 8px;
				margin: 20px 0;
			}

			.modal {
				background: white;
				border-radius: 8px;
				overflow: hidden;
				box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
			}

			.modal-header {
				background: #f8f9fa;
				padding: 15px;
				border-bottom: 1px solid #ddd;
			}

			.modal-body {
				padding: 20px;
			}

			.modal-footer {
				background: #f8f9fa;
				padding: 15px;
				border-top: 1px solid #ddd;
				text-align: right;
			}
		`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {}

@Component({
	selector: 'app-content-projection',
	standalone: true,
	imports: [CardComponent, ModalComponent],
	template: `
		<div class="content-projection-container">
			<h2>Задание 3: Content Projection</h2>
			<p>Изучение ng-content и проекции контента</p>

			<div class="theory">
				<h3>Теория:</h3>
				<ul>
					<li>ng-content для проекции контента</li>
					<li>Named slots с select атрибутом</li>
					<li>Multiple content projection</li>
					<li>Conditional content projection</li>
				</ul>
			</div>

			<div class="practice">
				<h3>Практика:</h3>
				<div class="demo-container">
					<app-card>
						<h3 card-header>Заголовок карточки</h3>
						<p>
							Это основной контент карточки. Он проецируется в основной слот.
						</p>
						<div card-footer>
							<button>Действие 1</button>
							<button>Действие 2</button>
						</div>
					</app-card>

					<app-modal>
						<h2 modal-title>Заголовок модального окна</h2>
						<p>Содержимое модального окна может быть любым.</p>
						<ul>
							<li>Пункт 1</li>
							<li>Пункт 2</li>
							<li>Пункт 3</li>
						</ul>
						<div modal-actions>
							<button class="btn-cancel">Отмена</button>
							<button class="btn-confirm">Подтвердить</button>
						</div>
					</app-modal>
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
			.content-projection-container {
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

			.demo-container {
				display: grid;
				grid-template-columns: 1fr 1fr;
				gap: 20px;
				margin: 20px 0;
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

			.btn-cancel {
				background: #6c757d;
				color: white;
				border: none;
				padding: 8px 16px;
				border-radius: 4px;
				margin-right: 10px;
				cursor: pointer;
			}

			.btn-confirm {
				background: #28a745;
				color: white;
				border: none;
				padding: 8px 16px;
				border-radius: 4px;
				cursor: pointer;
			}
		`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentProjectionComponent {
	codeExample = `@Component({
  selector: 'app-card',
  template: \`
    <div class="card">
      <header class="card-header">
        <ng-content select="[card-header]"></ng-content>
      </header>
      <main class="card-body">
        <ng-content></ng-content>
      </main>
      <footer class="card-footer">
        <ng-content select="[card-footer]"></ng-content>
      </footer>
    </div>
  \`
})
export class CardComponent {}

@Component({
  selector: 'app-modal',
  template: \`
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <ng-content select="[modal-title]"></ng-content>
        </header>
        <main class="modal-body">
          <ng-content></ng-content>
        </main>
        <footer class="modal-footer">
          <ng-content select="[modal-actions]"></ng-content>
        </footer>
      </div>
    </div>
  \`
})
export class ModalComponent {}`;
}
