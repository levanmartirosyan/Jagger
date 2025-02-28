import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  constructor(
    private actR: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getProductById();
    }, 10);
  }

  private queryId!: string;
  public productDetails: any;
  public products: any[] = [];

  getProductById() {
    this.actR.queryParams.subscribe((params: any) => {
      this.queryId = params.productId;

      const storedProduct = sessionStorage.getItem(`product_${this.queryId}`);
      if (storedProduct) {
        this.productDetails = JSON.parse(storedProduct);
      }

      this.productService.getProducts().subscribe({
        next: (data: any) => {
          console.log('All products:', data);
          this.products = data;

          this.productDetails = this.products.find(
            (product: any) =>
              product.id.toString().trim() === this.queryId.trim()
          );

          if (this.productDetails) {
            sessionStorage.setItem(
              `product_${this.queryId}`,
              JSON.stringify(this.productDetails)
            );
          }

          console.log(this.productDetails);
        },
        error: (error: any) => {
          console.error(error);
        },
      });
    });
  }

  public zoomScale = 1;
  public zoomOrigin = { x: '50%', y: '50%' };

  onMouseEnter(event: MouseEvent) {
    this.zoomScale = 2;
  }

  onMouseMove(event: MouseEvent) {
    const image = event.target as HTMLImageElement;
    const rect = image.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const x = ((offsetX / rect.width) * 100).toFixed(2);
    const y = ((offsetY / rect.height) * 100).toFixed(2);
    this.zoomOrigin = { x: `${x}%`, y: `${y}%` };
  }

  onMouseLeave() {
    this.zoomScale = 1;
    this.zoomOrigin = { x: '50%', y: '50%' };
  }

  public addInfo: number = 0;

  toggleAddInfo(id: number) {
    this.addInfo = id;
  }

  goToDetails(id: any, name: string) {
    this.router.navigate([`products/details/${name}`], {
      queryParams: {
        productId: JSON.stringify(id),
      },
    });
  }
}
