import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgregarSerieComponent } from './componentes/agregar-serie/agregar-serie.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: AgregarSerieComponent},
      {path: '**', redirectTo: ''}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class AgregarSerieRoutingModule { }