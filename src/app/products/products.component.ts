import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
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
  public allProducts: any[] = [];
  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data: any) => {
        console.log(data);
        this.allProducts = data;
        this.products = [...data];
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  public keyword: string = '';
  searchProduct() {
    if (this.keyword.trim()) {
      this.products = this.allProducts.filter((product: any) =>
        product.name.toLowerCase().includes(this.keyword.trim().toLowerCase())
      );
    } else {
      this.products = [...this.allProducts];
    }
  }

  public openAccordionMenu: boolean = false;
  toggleAccordion() {
    this.openAccordionMenu = !this.openAccordionMenu;
  }

  goToDetails(id: any, name: string) {
    this.router.navigate([`products/details/${name}`], {
      queryParams: {
        productId: JSON.stringify(id),
      },
    });
  }
}
