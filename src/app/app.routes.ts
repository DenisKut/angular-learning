import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { COMPONENTS_ROUTES } from './modules/01-components/components.routes';
import { ADVANCED_ROUTES } from './modules/09-advanced/advanced.routes';

export const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '',
				redirectTo: '/components',
				pathMatch: 'full'
			},
			{
				path: 'components',
				loadChildren: () => COMPONENTS_ROUTES
			},
			{
				path: 'advanced',
				loadChildren: () => ADVANCED_ROUTES
			}
		]
	},
	{
		path: '**',
		redirectTo: '/components'
	}
];
