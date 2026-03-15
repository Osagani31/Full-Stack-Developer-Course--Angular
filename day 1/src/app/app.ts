import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  imports: [ContactComponent, SearchComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  requestData: any;

  public sendData(value: any) {
    this.requestData = value;
    console.log(value);
  }
}
