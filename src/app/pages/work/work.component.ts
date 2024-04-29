import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  isActiveCategorySlide = false;

  /**
   * CATEGORY SLIDE FUNCTIONALITY 
   * onToggleCategorySlide()
   */

  onToggleCategorySlide(){
      this.isActiveCategorySlide = !this.isActiveCategorySlide;
  }

  get projects() {
    return this.projectService.projects;
  }

  selectedCategory: string = 'All';

  constructor(
    private projectService: MainService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['category']) {
        this.selectedCategory = params['category'];
      } else {
        this.selectedCategory = 'All';
      }
    });

    this.projectService.getProjectsFromServer().subscribe((projects) => {
      this.projectService.projects = projects;
    });
  }

}
