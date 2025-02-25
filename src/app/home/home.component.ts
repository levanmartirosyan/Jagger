import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { CategoryComponent } from './category/category.component';
import { SaleComponent } from './sale/sale.component';
import { PopularComponent } from './popular/popular.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    CategoryComponent,
    SaleComponent,
    PopularComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
