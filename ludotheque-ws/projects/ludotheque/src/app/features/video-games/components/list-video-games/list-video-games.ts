import {Component, inject, signal} from '@angular/core';
import {GetAllVideoGames} from '../../services/get-all-video-games';
import {AsyncPipe} from '@angular/common';
import {TableVideoGame} from '../table-video-game/table-video-game';
import {VideoGame} from '../../models/video-game';
import {EditVideoGame} from '../edit-video-game/edit-video-game';

@Component({
  selector: 'ldk-list-video-games',
  imports: [
    AsyncPipe,
    TableVideoGame,
    EditVideoGame
  ],
  templateUrl: './list-video-games.html',
  styleUrl: './list-video-games.css',
})
export class ListVideoGames {
  private readonly getAllVideoGames = inject(GetAllVideoGames);

  protected readonly videoGamesResponse$ = this.getAllVideoGames.getAll();
  protected readonly title = signal('Mes jeux');
  protected readonly videoGameToBeEditable = signal<VideoGame | null | undefined>(undefined);

  protected changeTitle() {
    this.title.set('Mes jeux-vidéos');
  }

  protected editOne(videoGame: VideoGame) {
    this.videoGameToBeEditable.set(videoGame);
  }
}
