import { Component, OnInit } from '@angular/core';

import { SeriesService } from 'src/app/services/crud.service';
import { Serie } from 'src/app/models/serie';

import SwiperCore, {
  EffectFade,
  FreeMode,
  Navigation,
  Pagination,
  Swiper
} from 'swiper';

SwiperCore.use([Navigation, Pagination, FreeMode, EffectFade]);



@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {

  swiper = {
    navigation:true,
    freeMode:true,
    slidesPerGroup:2,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        slidesPerGroup: 1
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3.5,
        spaceBetween: 10
      },
      960: {
        slidesPerView: 4.5,
        spaceBetween: 30
      }
    }
  };
  

  constructor(
    private seriesService: SeriesService,
  ) {
   }

  public serie: Serie = new Serie(0 ,"", "", "", false, null, null);
  
  public series: any = [
    new Serie(0, "", "", "", false, null, null)
  ]

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((series: any) => {
      this.series = series;
      console.log(this.series);
    
    });

  }

}
