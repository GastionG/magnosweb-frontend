import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Links } from 'src/app/models/links';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {
  @Input() nameSerie: any;
  @Input() capN: any;
  @Input() pag: any;

  constructor(
  ) {
   }

  imagen: any;
  url: any;
  enlaces: Links = new Links;
  
  ngOnInit(): void {

    this.url = "https://magnosscan.000webhostapp.com/magnosBD/obras/"+this.nameSerie.toLowerCase()+"/capitulos/"+this.capN+"/"+this.pag+".jpg";
    //this.url = "http://localhost/MagnosBD/obras/"+this.nameSerie.toLowerCase()+"/capitulos/"+this.capN+"/"+this.pag+".jpg";
    
  }

}