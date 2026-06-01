import { Routes } from '@angular/router';
import {ListVideoGames} from './features/video-games/components/list-video-games/list-video-games';

export const routes: Routes = [
  {
    path: 'video-games',
    component: ListVideoGames,
  },
];
