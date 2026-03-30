import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  imports: [RouterLink, RouterOutlet,FormsModule],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss',
})
export class ProductPage {
  selectedId:any='';
  router=inject(Router);

  public navigate(){
  this.router.navigateByUrl(`/product/update/${this.selectedId}`);
  }
}
