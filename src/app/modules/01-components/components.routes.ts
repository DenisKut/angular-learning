import { Routes } from '@angular/router';

import { CounterComponent } from './components/counter/counter.component';
import { ComponentsMainComponent } from './components-main.component';

export const COMPONENTS_ROUTES: Routes = [
	{
		path: '',
		component: ComponentsMainComponent,
		children: [
			{
				path: '',
				redirectTo: 'counter',
				pathMatch: 'full'
			},
			{
				path: 'counter',
				loadComponent: () => CounterComponent
			}
		]
	}
];
