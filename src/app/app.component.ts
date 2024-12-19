import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from './components/top-nav/top-navcomponent';
import { HeaderComponent } from './components/header/headercomponent';
import { PageNavComponent } from './components/menu-beam-bar/pagenavcomponent';
import { PictureComponent } from './components/albums/picturecomponent';
import { FooterNavComponent } from './components/footernav/footernavcomponent';
import { StatsComponent } from './components/stats/statscomponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopNavComponent, HeaderComponent, PageNavComponent, PictureComponent, StatsComponent, FooterNavComponent],
  template: `
    <top-nav></top-nav>
    <header></header>
    <pagenavigation></pagenavigation>
    <picturecomponent></picturecomponent>
    <statscomponent></statscomponent>
    <router-outlet></router-outlet>
    <footernav></footernav>
  `,
})
export class AppComponent {}