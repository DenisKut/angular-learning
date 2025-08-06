import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-components-main',
	standalone: true,
	imports: [RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: './components-main.component.html',
	styleUrls: ['./components-main.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentsMainComponent {}
