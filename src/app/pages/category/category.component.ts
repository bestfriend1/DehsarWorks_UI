import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements AfterViewInit , OnInit  {

  
  imageUrls: string[] = [
    'https://img.freepik.com/free-photo/young-woman-walking-wooden-path-with-green-rice-field-vang-vieng-laos_335224-1258.jpg',
    'https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg',
    'https://img.freepik.com/free-photo/cows-eating-lush-grass-green-field-front-fuji-mountain-japan_335224-36.jpg',
    'https://img.freepik.com/free-photo/water-fall_335224-985.jpg'
  ];

  @ViewChild('sectionContainer', { static: true }) sectionContainer!: ElementRef<HTMLElement>;
  observer!: IntersectionObserver;


  

  constructor(private renderer: Renderer2) { }



  ngAfterViewInit() {
    this.setupCarouselLoop();
    // this.onUseGreenSok();
    // this.initIntersectionObserver();
  }

  private setupCarouselLoop() {
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

  // private initIntersectionObserver() {
  //   if (this.sectionContainer && this.sectionContainer.nativeElement) {
  //     this.observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('in-view');
  //         } else {
  //           entry.target.classList.remove('in-view');
  //         }
  //       });
  //     });
  
  //     this.observer.observe(this.sectionContainer.nativeElement);
  //   } else {
  //     console.error('Section container not found or not yet initialized.');
  //   }
  // }

//   @HostListener('window:scroll', ['$event'])
// onWindowScroll(event: any) {
//   const scrollPos = window.scrollY;

//   // Adjust the position of each section based on scroll position
//   const sections = document.querySelectorAll('.all > section');
//   sections.forEach((section: any) => { // Change the type of section to 'any'
//     const offset = section.offsetTop;
//     const translateY = (scrollPos - offset) * 0.5; // Adjust the factor as needed
//     section.style.transform = `translateY(${translateY * 10}px)`;
//   });
// }

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

  @ViewChild('sliderContainer', { static: true }) sliderContainer!: ElementRef<HTMLDivElement>;


  items = [
    {
      imageUrl: '../../../assets/images/cat2.png',
      title: 'Residential',
      description: 'Coding Platform'
    },
    {
      imageUrl: '../../../assets/images/cat2.png',
      title: 'Residential',
      description: 'Coding Platform'
    },
    {
      imageUrl: '../../../assets/images/cat2.png',
      title: 'Residential',
      description: 'Coding Platform'
    },
    {
      imageUrl: '../../../assets/images/cat2.png',
      title: 'Residential',
      description: 'Coding Platform'
    },
    {
      imageUrl: '../../../assets/images/cat2.png',
      title: 'Residential',
      description: 'Coding Platform'
    },
    {
      imageUrl: '../../../assets/images/cat2.png',
      title: 'Residential',
      description: 'Coding Platform'

      
    },
    
    
    // Add other items as needed
  ];
  step: number = 1;

  

  ngOnInit(): void {

    const tl = gsap;
    tl.registerPlugin(ScrollTrigger);
    // Implement any additional initialization logic if needed
    
  }

  prevSlide(): void {
    const container = this.sliderContainer.nativeElement;
    const slideItem = container.querySelector('.slider__item');
    const slideWidth = slideItem?.clientWidth; // Get width of a single slide
    if (slideWidth) {
      container.scrollLeft -= slideWidth;
    }
  }

  nextSlide(): void {
    const container = this.sliderContainer.nativeElement;
    const slideItem = container.querySelector('.slider__item');
    const slideWidth = slideItem?.clientWidth; // Get width of a single slide
    if (slideWidth) {
      container.scrollLeft += slideWidth;
    }
  }


  // onUseGreenSok() {
  //   let sections: any[] = gsap.utils.toArray(
  //     '.catagory '
  //   );
  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length ),
  //     ease: 'none',
  //     target: 'catagory',
  //     scrollTrigger: {
  //       trigger: '.catagory ',
  //       pin: true,
  //       start: 'bottom bottom',
  //       scrub: 1,
  //       snap: 1 / (sections.length ),
  //       end: () =>
  //         '+=' +
  //         (
  //           document.querySelector(
  //             '.catagory'
  //           ) as HTMLElement
  //         ).offsetWidth,
  //     },
  //   });
  // }
  
}