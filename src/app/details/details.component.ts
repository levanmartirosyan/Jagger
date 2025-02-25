import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  constructor(
    private actR: ActivatedRoute,
    private productService: ProductsService
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

      this.productService.getProducts().subscribe({
        next: (data: any) => {
          console.log('All products:', data);
          this.products = data;

          this.productDetails = this.products.find(
            (product: any) =>
              product.id.toString().trim() === this.queryId.trim()
          );
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
}
