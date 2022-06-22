import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesconocidoRoutingModule } from './desconocido-routing.module';
import { DesconocidoComponent } from './componentes/desconocido/desconocido.component';


@NgModule({
  declarations: [
    DesconocidoComponent
  ],
  imports: [
    CommonModule,
    DesconocidoRoutingModule
  ]
})
export class DesconocidoModule { }
