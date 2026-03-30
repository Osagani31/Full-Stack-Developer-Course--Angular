import { Component, signal } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { MainHeader } from './core/main-header/main-header';
import { Footer } from './core/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MainHeader,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('system');
}
