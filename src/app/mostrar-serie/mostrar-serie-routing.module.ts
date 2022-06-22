import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieComponent } from './componentes/serie/serie.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component:SerieComponent},
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
export class MostrarSerieRoutingModule { }
