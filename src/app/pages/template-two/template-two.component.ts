import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-two',
  templateUrl: './template-two.component.html',
  styleUrls: ['./template-two.component.scss']
})
export class TemplateTwoComponent implements AfterViewInit {
  imageUrls: string[] = [
    'https://img.freepik.com/free-photo/young-woman-walking-wooden-path-with-green-rice-field-vang-vieng-laos_335224-1258.jpg',
    'https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg',
    'https://img.freepik.com/free-photo/cows-eating-lush-grass-green-field-front-fuji-mountain-japan_335224-36.jpg',
    'https://img.freepik.com/free-photo/water-fall_335224-985.jpg'
  ];

  ngAfterViewInit() {
    this.setupCarouselLoop();
  }

  setupCarouselLoop() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const firstImgClone = carousel.firstElementChild?.cloneNode(true) as HTMLElement;
    const lastImgClone = carousel.lastElementChild?.cloneNode(true) as HTMLElement;

    if (firstImgClone && lastImgClone) {
      carousel.appendChild(firstImgClone);
      carousel.insertBefore(lastImgClone, carousel.firstElementChild);

      carousel.scrollTo({
        left: carousel.offsetWidth,
        behavior: 'smooth'
      });
    }
  }

  scroll(direction: number) {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const scrollAmount = direction > 0 ? carousel.offsetWidth : -carousel.offsetWidth;

    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });

    // Reset scroll position to create looping effect
    if (carousel.scrollLeft === 0) {
      setTimeout(() => {
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      }, 500); // Adjust this delay if necessary
    } else if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
      setTimeout(() => {
        carousel.scrollLeft = carousel.offsetWidth;
      }, 500); // Adjust this delay if necessary
    }
  }
}
