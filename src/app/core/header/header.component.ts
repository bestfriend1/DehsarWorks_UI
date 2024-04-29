import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public isMenuActive = false;
  public menuHeight = 0;
  interval: any;
  bgWhite = true;

  /**
   * ACTIVE MENU FUNCTIONALITY
   * onToggleMenu()
   */
  onToggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  };


    closeMenu() {
        this.isMenuActive = false; // Set isMenuActive to false to close the hamburger menu
    }

    constructor(private router: Router) {}

    ngOnInit(): void {
      //Make header Transparent in home page and white in other pages
      let url = this.router.url

      if (url == "/") {
        this.bgWhite = false;
      } else {
        this.bgWhite = true;
      }

      this.router.events
        .pipe(
          filter(
            (event): event is NavigationEnd => event instanceof NavigationEnd
          ),
          map((event: NavigationEnd) => event.url)
        )
        .subscribe((url: string) => {
          console.log("URL:", url);
          if (url == "/") {
            this.bgWhite = false;
          } else {
            this.bgWhite = true;
          }
        });
    }

}
