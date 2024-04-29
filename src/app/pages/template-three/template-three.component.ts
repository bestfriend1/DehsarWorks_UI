import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/interfaces';
// declare const gsap: any;
// declare const ScrollTrigger: any;

@Component({
  selector: 'app-template-three',
  templateUrl: './template-three.component.html',
  styleUrls: ['./template-three.component.scss'],
})
export class TemplateThreeComponent implements AfterViewInit, OnInit {
  imageUrls: string[] = [
    'https://img.freepik.com/free-photo/young-woman-walking-wooden-path-with-green-rice-field-vang-vieng-laos_335224-1258.jpg',
    'https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg',
    'https://img.freepik.com/free-photo/cows-eating-lush-grass-green-field-front-fuji-mountain-japan_335224-36.jpg',
    'https://img.freepik.com/free-photo/water-fall_335224-985.jpg',
    '../../../assets/images/car4.png',
  ];

  selectedProject: Project;
  previousProject: Project;
  nextProject: Project;
  previd: number = 0;
  nextid: number = 0;

  constructor(
    private projectService: MainService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.projectService.getProjectsFromServer().subscribe((projects) => {
      this.projectService.projects = projects;
      this.selectedProject = this.projectService.projects[id];
      this.previd = Number(id) - 1;
      this.nextid = Number(id) + 1;
      if (this.previd < 0)
        this.previd = this.projectService.projects.length - 1;
      if (this.nextid > this.projectService.projects.length - 1) {
        this.nextid = 0;
      }

      this.previousProject = this.projectService.projects[this.previd];
      this.nextProject = this.projectService.projects[this.nextid];

      this.imageUrls = this.selectedProject.carousel0;
      for (let i = 0; i < this.selectedProject.accolades.length; i++) {
        this.selectedProject.accolades[i] = this.selectedProject.accolades[
          i
        ].replaceAll('\n', '<br>');
      }
    });
  }

  playPauseText: string = 'Play';

  playPauseAction() {
    const video = document.querySelector('#myVideo') as HTMLVideoElement;
    if (this.playPauseText == 'Play') {
      video.play();
      video.muted = false;
      this.playPauseText = 'Pause';
    } else {
      video.pause();
      this.playPauseText = 'Play';
    }
  }

  @ViewChild('sectionContainer', { static: true })
  sectionContainer!: ElementRef<HTMLElement>;
  observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.setupCarouselLoop();
    // this.onUseGreenSok();
    // this.initIntersectionObserver();
  }

  private setupCarouselLoop() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const firstImgClone = carousel.firstElementChild?.cloneNode(
      true
    ) as HTMLElement;
    const lastImgClone = carousel.lastElementChild?.cloneNode(
      true
    ) as HTMLElement;

    if (firstImgClone && lastImgClone) {
      carousel.appendChild(firstImgClone);
      carousel.insertBefore(lastImgClone, carousel.firstElementChild);

      carousel.scrollTo({
        left: carousel.offsetWidth,
        behavior: 'smooth',
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
    const scrollAmount =
      direction > 0 ? carousel.offsetWidth : -carousel.offsetWidth;

    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });

    // Reset scroll position to create looping effect
    if (carousel.scrollLeft === 0) {
      setTimeout(() => {
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      }, 500); // Adjust this delay if necessary
    } else if (
      carousel.scrollLeft >=
      carousel.scrollWidth - carousel.offsetWidth
    ) {
      setTimeout(() => {
        carousel.scrollLeft = carousel.offsetWidth;
      }, 500); // Adjust this delay if necessary
    }
  }

  @ViewChild('sliderContainer', { static: true })
  sliderContainer!: ElementRef<HTMLDivElement>;

  items = [
    {
      imageUrl: '../../../assets/images/cat1.png',
      title: 'Residential',
      description: 'Coding Platform',
    },
    {
      imageUrl: '../../../assets/images/cat2.png',
      title: 'Commercial',
      description: 'Coding Platform',
    },
    {
      imageUrl: '../../../assets/images/cat3.png',
      title: 'Institution',
      description: 'Coding Platform',
    },
    {
      imageUrl: '../../../assets/images/cat4.png',
      title: 'Interior',
      description: 'Coding Platform',
    },
    {
      imageUrl: '../../../assets/images/cat1.png',
      title: 'Interior',
      description: 'Coding Platform',
    },
    {
      imageUrl: '../../../assets/images/cat2.png',
      title: 'Interior',
      description: 'Coding Platform',
    },
    // Add other items as needed
  ];
  step: number = 1;

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
  //     '.four  '
  //   );
  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: 'none',
  //     target: '.four',
  //     scrollTrigger: {
  //       trigger: '.four',
  //       pin: true,
  //       start: 'bottom bottom',
  //       scrub: 1,
  //       snap: 1 / (sections.length ),
  //       end: () =>
  //         '+=' +
  //         (
  //           document.querySelector(
  //             '.four'
  //           ) as HTMLElement
  //         ).offsetWidth,
  //     },
  //   });
  // }
}