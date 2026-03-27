import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyPipe } from "./myPipe";
@Component({
  selector: 'app-root',
  imports: [FormsModule, UpperCasePipe, DatePipe, CurrencyPipe, MyPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  name = 'Kamal';
  today = new Date();
  salary=2500;
  text='Hi Team';
}