import {Component, inject} from '@angular/core';
import {GetAllVideoGames} from '../../services/get-all-video-games';

@Component({
  selector: 'ldk-list-video-games',
  imports: [],
  templateUrl: './list-video-games.html',
  styleUrl: './list-video-games.css',
})
export class ListVideoGames {
  private readonly getAllVideoGames = inject(GetAllVideoGames);
}
