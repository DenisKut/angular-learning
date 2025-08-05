import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-main-layout',
	imports: [RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {
	constructor() {
		console.log('MainLayoutComponent initialized');
	}
}
