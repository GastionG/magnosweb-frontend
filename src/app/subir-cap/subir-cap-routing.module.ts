import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubirCapComponent } from './componentes/subir-cap/subir-cap.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: SubirCapComponent},
      {path: '**', redirectTo:''}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class SubirCapRoutingModule { }
