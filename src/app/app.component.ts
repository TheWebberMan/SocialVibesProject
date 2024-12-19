import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { TopNavComponent } from './components/top-nav/top-navcomponent';
import { HeaderComponent } from './components/header/headercomponent';
import { PictureComponent } from './components/albums/picturecomponent';
import { FooterNavComponent } from './components/footernav/footernavcomponent';
import { StatsComponent } from './components/stats/statscomponent';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopNavComponent, HeaderComponent, PictureComponent, StatsComponent, FooterNavComponent, RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './app.component.html',
})
export class AppComponent {}