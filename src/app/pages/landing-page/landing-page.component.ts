import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  images: string[] = [
    '../../../assets/images/D1.jpg',
    '../../../assets/images/d2.jpg',
    '../../../assets/images/d3.jpg',
    '../../../assets/images/d4.jpg',
  ];
  dots: number[] = [0, 1, 2, 3];
  currentIndex: number = 0;
  setSlider: any;

  constructor() { }

  ngOnInit(): void {
    this.setSlider = setInterval(() => this.slider(false), 7000);
  }

  slider(flag: boolean | string, num?: number): void {
    const current = this.currentIndex;
    let next: number, index: number;

    if (!flag) {
      next = current === this.images.length - 1 ? 0 : current + 1;
    } else if (flag === 'dot') {
      next = num!;
    } else {
      next = current === 0 ? this.images.length - 1 : current - 1;
    }

    index = next;
    this.currentIndex = next;
  }

  moveSlide(flag: boolean): void {
    clearInterval(this.setSlider);
    this.slider(flag);
    this.setSlider = setInterval(() => this.slider(false), 6000);
  }

  moveSlideByDot(num: number): void {
    if (num === this.currentIndex) return;
    clearInterval(this.setSlider);
    this.slider('dot', num);
    this.setSlider = setInterval(() => this.slider(false), 6000);
  }
}
