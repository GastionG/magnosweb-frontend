import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './componentes/home/home.component';
import { ListaSeriesComponent } from './componentes/lista-series/lista-series.component';
import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';

import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { CapsRecientesComponent } from './componentes/caps-recientes/caps-recientes.component';
import { TarjetaCapComponent } from './componentes/tarjeta-cap/tarjeta-cap.component';
import { Links } from '../models/links';

@NgModule({
  declarations: [
    HomeComponent,
    ListaSeriesComponent,
    TarjetaComponent,
    CapsRecientesComponent,
    TarjetaCapComponent,
    TarjetaCapComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    SwiperModule
  ],
  providers: [
    Links
  ]
})
export class HomeModule { }
