import { NgIf } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	forwardRef,
	Input,
	Output
} from '@angular/core';

import { User, USER_LIST } from './consts';

@Component({
	selector: 'app-user-card',
	standalone: true,
	styleUrls: ['./user-card.component.scss'],
	templateUrl: './user-card.component.html',
	imports: [forwardRef(() => UserCardItemComponent), NgIf],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
	constructor() {
		this.resetUserList();
	}

	protected userList!: Array<User>;
	public selectedUser: User | undefined;

	public resetUserList(): void {
		this.userList = Array.from(USER_LIST);
		this.selectedUser = undefined;
	}

	public selectUser(inputUser: User) {
		this.selectedUser = { ...inputUser };
	}

	public deleteUser(id: number) {
		this.userList = this.userList.filter(user => user.id !== id);

		if (this.selectedUser?.id === id) {
			this.selectedUser = undefined;
		}
	}
}

@Component({
	selector: 'app-user-card-item',
	standalone: true,
	template: `<div class="user-card-item" (click)="select()">
		<div class="user-card-item__info">
			<p class="user-card-item__info-line">
				<span>ID:</span>
				<span>{{ userInfo.id }}</span>
			</p>
			<p class="user-card-item__info-line">
				<span>Name:</span>
				<span>{{ userInfo.name }}</span>
			</p>
			<p class="user-card-item__info-line">
				<span>Email:</span>
				<span>{{ userInfo.email }}</span>
			</p>
		</div>
		<img
			src="https://i.pravatar.cc/150?u={{ userInfo.name }}"
			[alt]="'фото ' + userInfo.name"
		/>
		<button class="delete-btn" type="button" (click)="selectForDelete($event)">
			delete
		</button>
	</div>`,
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
