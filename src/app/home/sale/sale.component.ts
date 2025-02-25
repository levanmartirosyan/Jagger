import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss',
})
export class SaleComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts();
    }, 10);
  }

  public products: any[] = [];
  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data: any) => {
        console.log(data);
        this.products = data;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  goToDetails(id: any, name: string) {
    this.router.navigate([`products/details/${name}`], {
      queryParams: {
        productId: JSON.stringify(id),
      },
    });
  }
}
