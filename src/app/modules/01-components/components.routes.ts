import { Routes } from '@angular/router';

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
				loadComponent: () =>
					import('./components/counter/counter.component').then(
						m => m.CounterComponent
					)
			},
			{
				path: 'user-card',
				loadComponent: () =>
					import('./components/user-card/user-card.component').then(
						m => m.UserCardComponent
					)
			},
			{
				path: 'content-projection',
				loadComponent: () =>
					import(
						'./components/content-projection/content-projection.component'
					).then(m => m.ContentProjectionComponent)
			},
			{
				path: 'lifecycle',
				loadComponent: () =>
					import('./components/lifecycle/lifecycle.component').then(
						m => m.LifecycleComponent
					)
			},
			{
				path: 'view-child',
				loadComponent: () =>
					import('./components/view-child/view-child.component').then(
						m => m.ViewChildComponent
					)
			}
		]
	}
];
