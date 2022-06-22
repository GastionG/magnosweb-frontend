import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCapitulosComponent } from './componentes/lista-capitulos/lista-capitulos.component';
import { SerieComponent } from './componentes/serie/serie.component';
import { RouterModule } from '@angular/router';
import { MostrarSerieRoutingModule } from './mostrar-serie-routing.module';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    ListaCapitulosComponent,
    SerieComponent
  ],
  imports: [
    CommonModule,
    MostrarSerieRoutingModule,
    RouterModule,
    SwiperModule
  ]
})
export class MostrarSerieModule { }
