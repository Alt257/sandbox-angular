import { Routes } from '@angular/router';
import {ListVideoGames} from './features/video-games/components/list-video-games/list-video-games';
import {Home} from './pages/home/home';
import {StarWarsFilms} from './pages/star-wars-films/star-wars-films';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'video-games',
    component: ListVideoGames,
  },
  {
    path: 'star-wars-films',
    component: StarWarsFilms,
  }
];
