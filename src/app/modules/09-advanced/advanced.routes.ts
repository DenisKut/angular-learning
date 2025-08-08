import { Routes } from '@angular/router';

import { AdvancedComponent } from './advanced.component';

export const ADVANCED_ROUTES: Routes = [
	{
		path: '',
		component: AdvancedComponent,
		children: []
	}
];
