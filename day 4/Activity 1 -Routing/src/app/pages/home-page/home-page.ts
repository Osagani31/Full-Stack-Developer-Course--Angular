import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-page',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
