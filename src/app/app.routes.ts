import { Routes } from '@angular/router';
import { PictureComponent } from './components/albums/picturecomponent';
import { StatsComponent } from './components/stats/statscomponent';

export const routes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: PictureComponent }, // Default route
  { path: 'stats', component: StatsComponent }, // Route for stats view
];
