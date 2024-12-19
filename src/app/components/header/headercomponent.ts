import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'header',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './headercomponent.html',
  styleUrl: './headercomponent.css'
})
export class HeaderComponent {
  title = 'social-vibes-header';

}
