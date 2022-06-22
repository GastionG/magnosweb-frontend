import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'uploaderougnoierubgirwebwpoieubweiufbwe34u34ibo3i45bpobui43bu534',
    loadChildren: () => import('./subir-cap/subir-cap.module').then(m => m.SubirCapModule)
  },
  {
    path: 'addiofbuytb45oc57ty54h4gibuo4vb4u5ytf4578ffioudgio4748u45i45hbgf8',
    loadChildren: () => import('./agregar-serie/agregar-serie.module').then(m => m.AgregarSerieModule)
  },
  {
    path: 'serie/:name',
    loadChildren: () => import('./mostrar-serie/mostrar-serie.module').then(m => m.MostrarSerieModule)
  },
  {
    path: 'cap/:serie/:cap',
    loadChildren: () => import('./mostrar-cap/mostrar-cap.module').then(m => m.MostrarCapModule)
  },
  {
    path: 'apoyanos',
    loadChildren: () => import('./apoyanos/apoyanos.module').then(m => m.ApoyanosModule)
  },
  {
    path: 'unetenos',
    loadChildren: () => import('./unetenos/unetenos.module').then(m => m.UnetenosModule)
  },
  {
    path: '**',
    loadChildren: () => import('./desconocido/desconocido.module').then(m => m.DesconocidoModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
