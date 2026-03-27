import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgForOf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [FormsModule, NgIf, NgForOf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  isLoggedIn=true;
  users=['kamal', 'Nihal', 'Bandara'];
  role='USER';
}