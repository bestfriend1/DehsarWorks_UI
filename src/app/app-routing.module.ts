import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { IdeaSpaceComponent } from './pages/idea-space/idea-space.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { TemplateTwoComponent } from './pages/template-two/template-two.component';
import { TemplateThreeComponent } from './pages/template-three/template-three.component';

const routes: Routes = [
  // {path:'', component:NavbarComponent},
  {path:'', component:LandingPageComponent},
  {path:'idea', component:IdeaSpaceComponent},
  {path:'temp2', component:TemplateTwoComponent},
  {path:'temp3', component:TemplateThreeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
