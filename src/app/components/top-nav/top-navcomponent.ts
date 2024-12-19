import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'top-nav',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './top-navcomponent.html',
  styleUrl: './top-navcomponent.css'
})
export class TopNavComponent {
  title = 'social-vibes-pages';
  
  moneydata = 400;
  addMoney() {

    this.moneydata += 100;
    // I'm aware that this is not how you earn ingame currency on the app haha - but replace with the right functions for ingame currency changes
  }

}
