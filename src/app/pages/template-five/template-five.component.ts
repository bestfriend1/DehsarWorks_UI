import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/interfaces';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-template-five',
  templateUrl: './template-five.component.html',
  styleUrls: ['./template-five.component.scss'],
})
export class TemplateFiveComponent {
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
}
