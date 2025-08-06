import { ChangeDetectionStrategy, Component /* Input */ } from '@angular/core';

import { User } from './consts';
@Component({
	selector: 'app-user-card',
	standalone: true,
	styleUrls: ['./user-card.component.scss'],
	templateUrl: './user-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
	protected userList: Array<User> = [
		{
			id: 0,
			name: 'Абоба Абобыч',
			email: 'aboba@mail.ru'
		},
		{
			id: 1,
			name: 'Сан Саныч',
			email: 'sanches@list.ru'
		},
		{
			id: 3,
			name: 'Анатоль Рыгорыч',
			email: 'anatol@yandex.ru'
		}
	];
}

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
	selector: 'app-user-card-item',
	standalone: true,
	template: `<div></div>`,
	styleUrls: ['./user-card.component.scss']
})
export class UserCardItemComponent {
	// private _user: User;
	set setUser(user: User) {
		// this._user = { ...user };
	}
	// @Input() user: User;
}
