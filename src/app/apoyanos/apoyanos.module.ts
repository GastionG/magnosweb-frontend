import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApoyanosRoutingModule } from './apoyanos-routing.module';
import { ApoyanosComponent } from './componentes/apoyanos/apoyanos.component';
import { Links } from '../models/links';


@NgModule({
  declarations: [
    ApoyanosComponent
  ],
  imports: [
    CommonModule,
    ApoyanosRoutingModule
  ],
  providers: [
    Links
  ]
})
export class ApoyanosModule { }
