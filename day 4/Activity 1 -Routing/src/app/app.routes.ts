import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component: HomePage},
  {path:'contact',loadComponent:()=>import('./pages/contact-page/contact-page')
    .then(m=>m.ContactPage)},
   {path:'about-us',loadComponent:()=>import('./pages/about-us-page/about-us-page')
    .then(m=>m.AboutUsPage)},
   {path:'product',loadComponent:()=>import('./pages/product-page/product-page')
    .then(m=>m.ProductPage),
    children:[
      {path:'',redirectTo:'list',pathMatch:'full'},
      {path:'list',loadComponent:()=>import('./pages/product-page/inner-items/product-list/product-list')
      .then(m=>m.ProductList)},
      {path:'new',loadComponent:()=>import('./pages/product-page/inner-items/new-product/new-product')
      .then(m=>m.NewProduct)},
      {path:'update/:id',loadComponent:()=>import('./pages/product-page/inner-items/update-product/update-product')
      .then(m=>m.UpdateProduct)},
    ]

  },
    {path:'**',loadComponent:()=>import('./pages/not-found-page/not-found-page')
    .then(m=>m.NotFoundPage)},


];
