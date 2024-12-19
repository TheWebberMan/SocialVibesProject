import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pagenavigation',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './pagenavcomponent.html',
})
export class PageNavComponent {
  title = 'social-vibes-header';

}
