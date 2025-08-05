import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { COMPONENTS_ROUTES } from './modules/01-components/components.routes';

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
				path: 'directives',
				loadComponent: () =>
					import('./modules/02-directives/directives-main.component').then(
						c => c.DirectivesMainComponent
					)
			},
			{
				path: 'pipes',
				loadComponent: () =>
					import('./modules/03-pipes/pipes-main.component').then(
						c => c.PipesMainComponent
					)
			},
			{
				path: 'services',
				loadComponent: () =>
					import('./modules/04-services/services-main.component').then(
						c => c.ServicesMainComponent
					)
			}
		]
	},
	{
		path: '**',
		redirectTo: '/components'
	}
];
