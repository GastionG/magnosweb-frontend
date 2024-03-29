import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesconocidoComponent } from './componentes/desconocido/desconocido.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: DesconocidoComponent},
      {path: '**', redirectTo:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesconocidoRoutingModule { }
