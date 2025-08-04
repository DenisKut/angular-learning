import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [
		// Здесь можно добавить компоненты, которые будут доступны во всем приложении (переиспользуемые)
	],
	imports: [CommonModule],
	exports: [
		CommonModule
		// Здесь можно добавить экспортируемые компоненты, директивы и пайпы
	]
})
export class SharedModule {
	constructor() {
		console.log('SharedModule initialized');
	}
}
