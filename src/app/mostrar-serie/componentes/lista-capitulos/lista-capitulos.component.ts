import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-lista-capitulos',
  templateUrl: './lista-capitulos.component.html',
  styleUrls: ['./lista-capitulos.component.css']
})
export class ListaCapitulosComponent implements OnInit {

  @Input() caps: any;
  @Input() serieName: any;

  constructor(    ) { }

  ngOnInit(): void {
    
  }

}
