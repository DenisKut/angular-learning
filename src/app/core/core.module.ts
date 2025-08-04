import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [
		// Здесь можно добавить сервисы, которые будут доступны во всем приложении
	]
})
export class CoreModule {
	constructor() {
		console.log('CoreModule initialized');
	}
}
