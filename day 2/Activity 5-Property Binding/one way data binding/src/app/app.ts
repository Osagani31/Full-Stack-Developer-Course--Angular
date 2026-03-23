import { Component} from '@angular/core';



@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
 name='John Doe';
 dogImage='https://tse2.mm.bing.net/th/id/OIP.g-7_uhfNKtAS3v1nVeIqmAHaHY?pid=Api&h=220&P=0';
 status=true;
   
 public clickMe(){
  alert('Button clicked!');
 }

}
