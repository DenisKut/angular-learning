import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output
} from '@angular/core';

interface User {
	id: number;
	name: string;
	email: string;
	avatar: string;
	role: string;
}

@Component({
	selector: 'app-user-card-item',
	standalone: true,
	template: `
		<div class="user-card" (click)="onClick()">
			<div class="avatar">{{ user.avatar }}</div>
			<div class="info">
				<h3>{{ user.name }}</h3>
				<p>{{ user.email }}</p>
				<span class="role">{{ user.role }}</span>
			</div>
			<button class="delete-btn" (click)="onDelete($event)">×</button>
		</div>
	`,
	styles: [
		`
			.user-card {
				display: flex;
				align-items: center;
				padding: 15px;
				background: white;
				border-radius: 8px;
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
				cursor: pointer;
				transition: all 0.3s ease;
				position: relative;
			}

			.user-card:hover {
				transform: translateY(-2px);
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
			}

			.avatar {
				font-size: 2rem;
				margin-right: 15px;
			}

			.info {
				flex: 1;
			}

			.info h3 {
				margin: 0 0 5px 0;
				color: #333;
			}

			.info p {
				margin: 0 0 5px 0;
				color: #666;
				font-size: 0.9rem;
			}

			.role {
				background: #e3f2fd;
				color: #1976d2;
				padding: 2px 8px;
				border-radius: 12px;
				font-size: 0.8rem;
			}

			.delete-btn {
				position: absolute;
				top: 5px;
				right: 5px;
				background: #ff4444;
				color: white;
				border: none;
				border-radius: 50%;
				width: 24px;
				height: 24px;
				cursor: pointer;
				font-size: 1rem;
				line-height: 1;
			}

			.delete-btn:hover {
				background: #cc0000;
			}
		`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardItemComponent {
	@Input() user!: User;
	@Output() userClick = new EventEmitter<User>();
	@Output() userDelete = new EventEmitter<number>();

	onClick() {
		this.userClick.emit(this.user);
	}

	onDelete(event: Event) {
		event.stopPropagation();
		this.userDelete.emit(this.user.id);
	}
}

@Component({
	selector: 'app-user-card',
	standalone: true,
	imports: [UserCardItemComponent],
	template: `
		<div class="user-card-container">
			<h2>Задание 2: User Card Component</h2>
			<p>
				Изучение &#64;Input и &#64;Output декораторов для взаимодействия между
				компонентами
			</p>

			<div class="theory">
				<h3>Теория:</h3>
				<ul>
					<li>&#64;Input() - получение данных от родительского компонента</li>
					<li>&#64;Output() - передача событий родительскому компоненту</li>
					<li>EventEmitter для создания кастомных событий</li>
					<li>Property binding и Event binding</li>
				</ul>
			</div>

			<div class="practice">
				<h3>Практика:</h3>
				<div class="demo-container">
					<div class="user-cards">
						@for (user of users; track user.id) {
							<app-user-card-item
								[user]="user"
								(userClick)="onUserClick($event)"
								(userDelete)="onUserDelete($event)"
							>
							</app-user-card-item>
						}
					</div>

					@if (selectedUser) {
						<div class="selected-user">
							<h4>Выбранный пользователь:</h4>
							<p>
								<strong>{{ selectedUser.name }}</strong> ({{
									selectedUser.role
								}})
							</p>
							<p>{{ selectedUser.email }}</p>
						</div>
					}
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
			.user-card-container {
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
				grid-template-columns: 2fr 1fr;
				gap: 20px;
				margin: 20px 0;
			}

			.user-cards {
				display: grid;
				gap: 15px;
			}

			.selected-user {
				background: #fff3cd;
				padding: 15px;
				border-radius: 8px;
				border-left: 4px solid #ffc107;
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
export class UserCardComponent {
	users: User[] = [
		{
			id: 1,
			name: 'Анна Иванова',
			email: 'anna@example.com',
			avatar: '👩‍💼',
			role: 'Frontend Developer'
		},
		{
			id: 2,
			name: 'Петр Петров',
			email: 'peter@example.com',
			avatar: '👨‍💻',
			role: 'Backend Developer'
		},
		{
			id: 3,
			name: 'Мария Сидорова',
			email: 'maria@example.com',
			avatar: '👩‍🎨',
			role: 'UI/UX Designer'
		}
	];

	selectedUser: User | null = null;

	onUserClick(user: User) {
		this.selectedUser = user;
	}

	onUserDelete(userId: number) {
		this.users = this.users.filter(user => user.id !== userId);
		if (this.selectedUser?.id === userId) {
			this.selectedUser = null;
		}
	}

	codeExample = `@Component({
  selector: 'app-user-card-item',
  template: \`
    <div class="user-card" (click)="onClick()">
      <div class="avatar">{{ user.avatar }}</div>
      <div class="info">
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
        <span class="role">{{ user.role }}</span>
      </div>
      <button (click)="onDelete($event)">×</button>
    </div>
  \`
})
export class UserCardItemComponent {
  @Input() user!: User;
  @Output() userClick = new EventEmitter<User>();
  @Output() userDelete = new EventEmitter<number>();

  onClick() {
    this.userClick.emit(this.user);
  }

  onDelete(event: Event) {
    event.stopPropagation();
    this.userDelete.emit(this.user.id);
  }
}`;
}

export type { User };
