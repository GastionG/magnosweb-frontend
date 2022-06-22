import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: HomeComponent},
      {path: '**', redirectTo:'a'}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
