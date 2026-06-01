import {Component, input, signal} from '@angular/core';
import {VideoGame} from '../../models/video-game';

@Component({
  selector: 'ldk-table-video-game',
  imports: [],
  templateUrl: './table-video-game.html',
  styleUrl: './table-video-game.css',
})
export class TableVideoGame {
  readonly videoGames = input.required<VideoGame[]>();
}
