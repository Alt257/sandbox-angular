import {Component, input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {VideoGame} from '../../models/video-game';

@Component({
  selector: 'ldk-edit-video-game',
  imports: [
    FormsModule
  ],
  templateUrl: './edit-video-game.html',
  styleUrl: './edit-video-game.css',
})
export class EditVideoGame {
  readonly videoGame = input.required<VideoGame>();
}
