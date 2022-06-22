import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnetenosComponent } from './componentes/unetenos/unetenos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: UnetenosComponent},
      {path: '**', redirectTo:''}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnetenosRoutingModule { }
