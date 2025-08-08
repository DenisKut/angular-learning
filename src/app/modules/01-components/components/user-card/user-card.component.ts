import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { User, USER_LIST } from './consts';
import { UserCardItemComponent } from './user-card-item.component';

@Component({
	selector: 'app-user-card',
	standalone: true,
	styleUrls: ['./user-card.component.scss'],
	templateUrl: './user-card.component.html',
	imports: [UserCardItemComponent, NgIf],
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
