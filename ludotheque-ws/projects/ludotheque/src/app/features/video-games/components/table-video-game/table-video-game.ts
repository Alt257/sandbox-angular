import {Component, input, output, signal} from '@angular/core';
import {VideoGame} from '../../models/video-game';

@Component({
  selector: 'ldk-table-video-game',
  imports: [],
  templateUrl: './table-video-game.html',
  styleUrl: './table-video-game.css',
})
export class TableVideoGame {
  readonly videoGames = input.required<VideoGame[]>();

  readonly toEdit = output<VideoGame>();

  editClicked(videoGame: VideoGame) {
    this.toEdit.emit(videoGame);
  }
}
