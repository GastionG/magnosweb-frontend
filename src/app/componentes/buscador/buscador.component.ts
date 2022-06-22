import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { SeriesService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(
    private seriesService: SeriesService
  ) { }
  inputActive = false;

  filterSerie = "";

  public series: any = [
    new Serie(0, "", "", "", false, null, null)
  ]

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((series: any) => {
      this.series = series;
      console.log(this.series);
      
    });
  }

  input(event:any){
    
    if(event.target.value.length >= 2){
      console.log(event.target.value);
      this.inputActive = true;
      
    }
    else{
      this.inputActive = false;
      
    }

  }

  limpiar(){
    this.filterSerie = "";
    this.inputActive = false;
  }

}
