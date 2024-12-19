import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'footernav',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './footernavcomponent.html',
})
export class FooterNavComponent {
  title = 'social-vibes-footer';

}
