export interface User {
	id: number;
	name: string;
	email: string;
}

export const USER_LIST: Array<User> = [
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
