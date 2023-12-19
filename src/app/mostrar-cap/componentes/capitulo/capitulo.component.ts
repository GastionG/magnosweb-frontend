import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SeriesService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-capitulo',
  templateUrl: './capitulo.component.html',
  styleUrls: ['./capitulo.component.css']
})
export class CapituloComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private serieService: SeriesService,
  ) {
    actRoute.paramMap.subscribe((params: Params)=>{
      this.ngOnInit;
    })

   }

  nameSerie: any;
  cap: number = 0;
  pagCan: any;
  idSerie: number = 0;

  nameCap: string = "";
  fechaCap: string = "";


  numeros: any = [];
  ngOnInit(): void {
    this.actRoute.params.subscribe((param: any)=>{
      this.nameSerie = param.serie;
      this.cap = param.cap;

      this.serieService.getCap(param.serie, param.cap).subscribe((a: any)=>{

        const capitulo = a.caps.find((a: any)=>a.number == param.cap);

        this.pagCan = 40;
        this.idSerie = a.id;
        this.nameCap = capitulo.name;
        this.fechaCap = capitulo.date;

        console.log(a);

        for (let i = 1; i < this.pagCan+1; i++) {
          this.numeros.push(i);
        }

      });
    });
  }

}
