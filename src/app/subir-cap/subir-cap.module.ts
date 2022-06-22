import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubirCapComponent } from './componentes/subir-cap/subir-cap.component';
import { FormsModule } from '@angular/forms';
import { SubirCapRoutingModule } from './subir-cap-routing.module';



@NgModule({
  declarations: [
    SubirCapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SubirCapRoutingModule
  ]
})
export class SubirCapModule { }
