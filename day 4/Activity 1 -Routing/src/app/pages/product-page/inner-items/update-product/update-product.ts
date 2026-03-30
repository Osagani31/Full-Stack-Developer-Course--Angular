import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  imports: [],
  templateUrl: './update-product.html',
  styleUrl: './update-product.scss',
})
export class UpdateProduct implements OnInit {
  activatedRoute=inject(ActivatedRoute);
  userId:any='';

  ngOnInit(): void {
    this.userId = this.activatedRoute
     .snapshot.paramMap.get('id');



  }
}
