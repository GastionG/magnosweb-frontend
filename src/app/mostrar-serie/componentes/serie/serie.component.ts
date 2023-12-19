import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Links } from 'src/app/models/links';
import { Serie } from 'src/app/models/serie';

import { SeriesService } from 'src/app/services/crud.service';

import SwiperCore, {
  FreeMode,
  
} from 'swiper';

SwiperCore.use([FreeMode]);

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  swiper = {
    freeMode:true,
    // Responsive breakpoints
    breakpoints: {
    }
  };

  constructor(
    private rutaActiva: ActivatedRoute,
    private seriesService: SeriesService
    ) { }

  nameSer: any;
  portada: any;
  enlaces: Links = new Links;
  public serie: Serie = new Serie(0, "", "", "", false, null, null)
  public generos: any = [];
  public caps: any = [];

  ngOnInit(): void {

    this.rutaActiva.params.subscribe((param: Params)=>{
      this.nameSer = param.name
      console.log(this.nameSer);

      this.seriesService.getSerie(this.nameSer).subscribe((serie: any)=>{
        console.log(serie);
        this.serie = serie;
        this.caps = serie.caps;
        this.portada = serie.portada;
        
        
        if(this.serie.accion == 1) this.generos.push("Accion");
        if(this.serie.aventura == 1) this.generos.push("Aventura");
        if(this.serie.comedia == 1) this.generos.push("Comedia");
        if(this.serie.cosasdelavida == 1) this.generos.push("Cosas de la vida");
        if(this.serie.ecchi == 1) this.generos.push("Ecchi");
        if(this.serie.fantasia == 1) this.generos.push("Fantasia");
        if(this.serie.magia == 1) this.generos.push("Magia");
        if(this.serie.sobrenatural == 1) this.generos.push("Sobrenatural");
        if(this.serie.horror == 1) this.generos.push("Horror");
        if(this.serie.misterio == 1) this.generos.push("Misterio");
        if(this.serie.psicologico == 1) this.generos.push("Psicologico");
        if(this.serie.romance == 1) this.generos.push("Romance");
        if(this.serie.ficcion == 1) this.generos.push("Ficcion");
        if(this.serie.deporte == 1) this.generos.push("Deporte");
        if(this.serie.reencarnacion == 1) this.generos.push("Reencarnacion");
        if(this.serie.vidaescolar == 1) this.generos.push("Vida escolar");
      });



    });
  }

}
