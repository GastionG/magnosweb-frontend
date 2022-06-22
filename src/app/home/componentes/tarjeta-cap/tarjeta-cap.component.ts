import { Component, OnInit, Input } from '@angular/core';
import { Links } from 'src/app/models/links';

@Component({
  selector: 'app-tarjeta-cap',
  templateUrl: './tarjeta-cap.component.html',
  styleUrls: ['./tarjeta-cap.component.css']
})
export class TarjetaCapComponent implements OnInit {
  @Input() capInfo: any;

  constructor(
    private enlace: Links
  ) { }

  portada: string = ""

  ngOnInit(): void {
    let newname = this.capInfo.name.replace(/ /g, "%20").toLowerCase();

    this.portada = this.enlace.bd+"/obras/"+newname+"/Portada.jpg"
    console.log(this.portada);
    console.log(this.capInfo.name);
    
    
  }

}
