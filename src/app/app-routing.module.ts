import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeaSpaceComponent } from './pages/idea-space/idea-space.component';
import { TemplateTwoComponent } from './pages/template-two/template-two.component';
import { TemplateThreeComponent } from './pages/template-three/template-three.component';
import { PagesComponent } from './pages/pages.component';
import { TemplateFourComponent } from './pages/template-four/template-four.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/landing-page/landing-page-routing.module').then(
            (m) => m.LandingPageRoutingModule
          ),
      },
      {
        path: 'work',
        loadChildren: () =>
          import('./pages/work/work.module').then((m) => m.WorkModule),
      },

      {
        path: 'work/:category',
        loadChildren: () =>
          import('./pages/work/work.module').then((m) => m.WorkModule),
      },

      {
        path: 'team',
        loadChildren: () =>
          import('./pages/team/team.module').then((m) => m.TeamModule),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./pages/news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'news/:id',
        loadChildren: () =>
          import('./pages/news-details/news-details.module').then(
            (m) => m.NewsDetailsModule
          ),
      },
      {
        path: 'news-details',
        loadChildren: () =>
          import('./pages/news-details/news-details.module').then(
            (m) => m.NewsDetailsModule
          ),
      },

      {
        path: 'contact-us',
        loadChildren: () =>
          import('./pages/contact-us/contact-us.module').then(
            (m) => m.ContactUsModule
          ),
      },
      {
        path: 'work/5/:id',
        loadChildren: () =>
          import('./pages/template-five/template-five.module').then(
            (m) => m.TemplateFiveModule
          ),
      },
      {
        path: 'work/1/:id',
        component: IdeaSpaceComponent,
      },
      {
        path: 'work/2/:id',
        component: TemplateTwoComponent,
      },
      {
        path: 'work/3/:id',
        component: TemplateThreeComponent,
      },
      {
        path: 'work/4/:id',
        component: TemplateFourComponent,
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
