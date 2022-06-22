import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapituloComponent } from './componentes/capitulo/capitulo.component';
import { ImagenComponent } from './componentes/imagen/imagen.component';
import { MostrarCapRoutingModule } from './mostrar-cap-routing.module';
import { OpcionesComponent } from './componentes/opciones/opciones.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CapituloComponent,
    ImagenComponent,
    OpcionesComponent
  ],
  imports: [
    CommonModule,
    MostrarCapRoutingModule,
    RouterModule
  ]
})
export class MostrarCapModule { }
