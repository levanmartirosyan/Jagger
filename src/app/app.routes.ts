import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Jagger - მთავარი',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Jagger - პროდუქტები',
  },
  {
    path: 'products/details/:id',
    component: DetailsComponent,
    title: 'Jagger - დეტალები',
  },
  {
    path: 'services',
    component: ServiceComponent,
    title: 'Jagger - მომსახურება',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Jagger - ჩვენს შესახებ',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Jagger - კონტაქტი',
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: 'Jagger - 404',
  },
];
