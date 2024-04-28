import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFiveComponent } from './template-five.component';

const routes: Routes = [
  {
    path:"",
    component:TemplateFiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateFiveRoutingModule { }
