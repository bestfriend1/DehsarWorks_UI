import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { IdeaSpaceComponent } from './pages/idea-space/idea-space.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TemplateTwoComponent } from './pages/template-two/template-two.component';
import { TemplateThreeComponent } from './pages/template-three/template-three.component';




@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LandingPageComponent,
    IdeaSpaceComponent,
    NavbarComponent,
    TemplateTwoComponent,
    TemplateThreeComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
