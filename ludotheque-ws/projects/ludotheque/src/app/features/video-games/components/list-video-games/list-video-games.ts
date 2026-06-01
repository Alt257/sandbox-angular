import {Component, inject, signal} from '@angular/core';
import {GetAllVideoGames} from '../../services/get-all-video-games';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'ldk-list-video-games',
  imports: [
    AsyncPipe
  ],
  templateUrl: './list-video-games.html',
  styleUrl: './list-video-games.css',
})
export class ListVideoGames {
  private readonly getAllVideoGames = inject(GetAllVideoGames);

  protected readonly videoGames$ = this.getAllVideoGames.getAll();
  protected readonly title = signal('Mes jeux');

  protected changeTitle() {
    this.title.set('Mes jeux-vidéos');
  }
}
