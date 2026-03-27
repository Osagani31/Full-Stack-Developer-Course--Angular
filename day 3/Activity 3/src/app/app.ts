import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgForOf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass } from '@angular/common';
import { HighlightDirective } from "./highlight.directive";
import { Apphover } from './apphover';
@Component({
  selector: 'app-root',
  imports: [FormsModule, NgClass, NgStyle, HighlightDirective, Apphover],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  isActive=true;
  items=['A','B','C','D'];
  role='fdf'
}