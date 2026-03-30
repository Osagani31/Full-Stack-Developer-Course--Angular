import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule, NgIf, JsonPipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  data: any;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form data : ' + form.value);
      this.data = form.value;
    }
  }
}
