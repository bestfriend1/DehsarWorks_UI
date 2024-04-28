import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFiveRoutingModule } from './template-five-routing.module';
import { TemplateFiveComponent } from './template-five.component';


@NgModule({
  declarations: [
    TemplateFiveComponent
  ],
  imports: [
    CommonModule,
    TemplateFiveRoutingModule
  ]
})
export class TemplateFiveModule { }
