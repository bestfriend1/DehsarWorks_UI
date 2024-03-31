import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { IdeaSpaceComponent } from './pages/idea-space/idea-space.component';
import { TemplateTwoComponent } from './pages/template-two/template-two.component';
import { TemplateThreeComponent } from './pages/template-three/template-three.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: '', component: LandingPageComponent },
      {
        path: "work",
        loadChildren: () => import('./pages/work/work.module').then(m => m.WorkModule)
      },
      {
        path: "team",
        loadChildren: () => import('./pages/team/team.module').then(m => m.TeamModule)
      },
      {
        path: "news",
        loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule)
      },
      {
        path:"news-details",
        loadChildren:() => import('./pages/news-details/news-details.module').then(m => m.NewsDetailsModule)
      },
      
      {
        path: "contact-us",
        loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule)
      },

      {
        path: 'idea',
        component: IdeaSpaceComponent
      },
      {
        path: 'temp2',
        component: TemplateTwoComponent
      },
      {
        path: 'temp3',
        component: TemplateThreeComponent
      },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
