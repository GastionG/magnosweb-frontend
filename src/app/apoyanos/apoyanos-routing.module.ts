import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApoyanosComponent } from './componentes/apoyanos/apoyanos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: ApoyanosComponent},
      {path: '**', redirectTo:''}
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApoyanosRoutingModule { }
