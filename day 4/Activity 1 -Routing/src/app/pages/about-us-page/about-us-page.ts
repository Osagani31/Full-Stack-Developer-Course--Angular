import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about-us-page',
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './about-us-page.html',
  styleUrl: './about-us-page.scss',
})
export class AboutUsPage {}
