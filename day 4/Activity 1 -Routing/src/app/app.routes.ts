import { ProductPage } from './pages/product-page/product-page';
import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
  {path:'home',component: HomePage},
  {path:'contact',loadComponent:()=>import('./pages/contact-page/contact-page')
    .then(m=>m.ContactPage)},
   {path:'about-us',loadComponent:()=>import('./pages/about-us-page/about-us-page')
    .then(m=>m.AboutUsPage)},
   {path:'product',loadComponent:()=>import('./pages/product-page/product-page')
    .then(m=>m.ProductPage)},



];
