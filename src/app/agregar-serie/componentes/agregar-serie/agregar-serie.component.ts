import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie';
import { SeriesService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-serie',
  templateUrl: './agregar-serie.component.html',
  styleUrls: ['./agregar-serie.component.css']
})
export class AgregarSerieComponent implements OnInit {

  constructor(
    private seriesService: SeriesService,
    private router: Router

  ) { }

  ngOnInit() {
  }
  serieModel = new Serie(0, "", "", "", false, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

  onSubmit() {
    console.log(this.serieModel.estado);
    
    this.seriesService.addSerie(this.serieModel).subscribe(() => {
      this.router.navigate(['']);
    })  
  }

  seleccionarArchivo(event: any){
    var file = event.target.files[0];
    const reader = new FileReader();
    this.serieModel.nombrePortada = file.name.split('.').pop();

    console.log(file);
  
    reader.onload = (e:any)=>{
      var archivo = btoa(e.target.result);
      this.serieModel.portada = archivo;
      
    };
    reader.readAsBinaryString(file);

  }
}
