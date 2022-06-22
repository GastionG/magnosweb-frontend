import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/crud.service';

import SwiperCore, {
  EffectFade,
  FreeMode,
  Navigation,
  Pagination,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, FreeMode, EffectFade]);


@Component({
  selector: 'app-caps-recientes',
  templateUrl: './caps-recientes.component.html',
  styleUrls: ['./caps-recientes.component.css']
})
export class CapsRecientesComponent implements OnInit {

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
        slidesPerView: 3.5,
        spaceBetween: 30
      }
    }
  };
  

  constructor(
    private seriesService:SeriesService
  ) { }
  capsRecientes: any;
  ngOnInit(): void {
    this.seriesService.getLastCaps().subscribe((caps: any)=>{
      console.log(caps);
      this.capsRecientes = caps;
      

    })
  }

}
