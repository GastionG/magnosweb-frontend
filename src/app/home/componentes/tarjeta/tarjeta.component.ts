import { Component, OnInit, Input} from '@angular/core';
import { trigger, state, style, animate, transition, query, group} from '@angular/animations';
import { Links } from 'src/app/models/links';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
  animations: [

    trigger('oscurecer', [
      state('oscuro', style({
        boxShadow: '0px -160px 100px -100px rgba(0,0,0,.5) inset',
      })),
      state('claro', style({
        boxShadow: '0px 0px 0px 0px rgba(0,0,0,.5) inset'
      })),
      transition('claro => oscuro', [
        group([
          query(':self', [
            animate(150, style({boxShadow: '0px -160px 100px -100px rgba(0,0,0,.5) inset',}))
          ]),
          query('@spawn', [
            style({opacity: '0'}),
            animate(100, style({
              opacity: '1',
              transform: 'translate(0, 0)'
            }))
          ])
        ])
      ]),
      transition('oscuro => claro', [
        group([
          query(':self', [
            animate(150, style({boxShadow: '0px 0px 0px 0px rgba(0,0,0,.5) inset'}))
          ]),
          query('@spawn', [
            style({opacity: '1'}),
            animate(100, style({
              transform: 'translate(0, 30px)',
              opacity: '0'
            }))
          ])
        ])
      ]),
    ]),
    trigger('spawn', [
      state('oscuro', style({
        transform: 'translate(0, 0)',
        opacity: '1'
      })),
      state('claro', style({
        transform: 'translate(0, 30px)',
        opacity: '0'
      }))
    ]),
    

  ]
})
export class TarjetaComponent implements OnInit {

  @Input() serie: any;
  
  portada: any;
  constructor(
    private enlaces: Links
  ) { }
  

  
  ngOnInit(): void {
    let newname = this.serie.name.replace(/ /g, "%20").toLowerCase();
    this.portada = this.enlaces.bd + "/obras/" + newname + "/Portada.jpg";

  }

  isOver = false;

  over(){
    this.isOver = !this.isOver
    console.log(this.isOver);
    
  }
}
