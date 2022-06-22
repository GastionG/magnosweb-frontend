import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarSerieComponent } from './componentes/agregar-serie/agregar-serie.component';
import { FormsModule } from '@angular/forms';
import { AgregarSerieRoutingModule } from './agregar-serie-routing.module';



@NgModule({
  declarations: [ AgregarSerieComponent],
  imports: [
    CommonModule,
    FormsModule,
    AgregarSerieRoutingModule
  ]
})
export class AgregarSerieModule { }
