import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CapituloComponent } from './componentes/capitulo/capitulo.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: CapituloComponent}
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MostrarCapRoutingModule { }
