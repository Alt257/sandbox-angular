import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainMenu} from './shared/uis/menus/main-menu/main-menu';
import { StarsField } from './shared/uis/decorations/stars/components/stars-field';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainMenu, StarsField],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
