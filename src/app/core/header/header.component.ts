import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isMenuActive = false;
  public menuHeight = 0;
  interval: any;

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

    


}
