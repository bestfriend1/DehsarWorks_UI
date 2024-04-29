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
import { Project } from 'src/app/interfaces';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-four',
  templateUrl: './template-four.component.html',
  styleUrls: ['./template-four.component.scss'],
})
export class TemplateFourComponent {
  imageUrls: string[] = [
    'https://img.freepik.com/free-photo/young-woman-walking-wooden-path-with-green-rice-field-vang-vieng-laos_335224-1258.jpg',
    'https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg',
    'https://img.freepik.com/free-photo/cows-eating-lush-grass-green-field-front-fuji-mountain-japan_335224-36.jpg',
    'https://img.freepik.com/free-photo/water-fall_335224-985.jpg',
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

  ngAfterViewInit() {
    this.setupCarouselLoop();
  }

  setupCarouselLoop() {
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
}