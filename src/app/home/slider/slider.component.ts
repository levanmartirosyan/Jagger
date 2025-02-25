import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit, OnDestroy {
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  public imageList: string[] = [
    'https://www.door-shop.com/modules/ps_imageslider/images/1d3042e2efa8943bc2f872d81871e8bee5869ecc_Los Anglès mini rosace DS.jpg',
    'https://www.door-shop.com/modules/ps_imageslider/images/053d86e6e25ee19004915d7ddfb2cbf0d43392ae_3.jpg',
    'https://www.door-shop.com/modules/ps_imageslider/images/811f1ffa8c61901baa081acabfad54c28a2e8a19_DS.jpg',
    'https://www.door-shop.com/modules/ps_imageslider/images/9dbcfc64570731201cb5abdd1dcad9edab310f55_amsterdam.jpg',
  ];

  public currentIndex: number = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.imageList.length) % this.imageList.length;
  }

  pauseAutoSlide() {
    clearInterval(this.intervalId);
  }

  resumeAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 5000);
  }
}
