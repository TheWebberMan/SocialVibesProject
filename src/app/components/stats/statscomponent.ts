import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'statscomponent',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './statscomponent.html',
})
export class StatsComponent {
  title = 'social-vibes-header';

}
