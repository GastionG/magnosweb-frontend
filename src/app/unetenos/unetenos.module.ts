import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnetenosRoutingModule } from './unetenos-routing.module';
import { UnetenosComponent } from './componentes/unetenos/unetenos.component';
import { Links } from '../models/links';


@NgModule({
  declarations: [
    UnetenosComponent
  ],
  imports: [
    CommonModule,
    UnetenosRoutingModule
  ],
  providers: [
    Links
  ]
})
export class UnetenosModule { }
