import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output
} from '@angular/core';

import { User } from './consts';

@Component({
	selector: 'app-user-card-item',
	standalone: true,
	templateUrl: './user-card-item.component.html',
	styleUrls: ['./user-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardItemComponent {
	private _user!: User;

	@Input()
	set setUser(user: User) {
		this._user = { ...user };
	}

	get userInfo(): User {
		return this._user;
	}

	@Output() clickedCard = new EventEmitter<User>();
	@Output() deletedCard = new EventEmitter<number>();

	select(): void {
		this.clickedCard.emit(this.userInfo);
	}

	selectForDelete(event: MouseEvent): void {
		event.stopPropagation();
		this.deletedCard.emit(this.userInfo.id);
	}
}
