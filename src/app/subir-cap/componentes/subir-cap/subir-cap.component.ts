import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Serie } from 'src/app/models/serie';

import { SeriesService } from 'src/app/services/crud.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-subir-cap',
  templateUrl: './subir-cap.component.html',
  styleUrls: ['./subir-cap.component.css']
})
export class SubirCapComponent implements OnInit {
  public buzon = new Array();
  public archivoSolo:any;
  public nombreSolo:any;
  public selected: boolean = true;
  capBandera:any; 
  getSerieName:any;



  constructor(
    public formulario:FormBuilder,
    private seriesService: SeriesService,
    private sanitizer: DomSanitizer
    ) {
  }
  public series: any = [
  new Serie(0, "", "", "", false, null, null)
  ];
  public images: any = [];
  nameConsulta: any;
  haycaps: number = 0;
  public numeros: any = [];
  public selectedCap: any;
  public CapInfo: any = {
    serieName: "",
    numeroCap: 0,
    nombreCap: "",
    fechaSubida: "",

  };
  capPags: any = [];
  public serieCaps = [];
  public sureDelete = false;



  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((series: any) => {
      this.series = series;
      
    });

    for (let index = 0; index < 20; index += 0.5) {
      this.numeros.push(index);
      
    }

  }

  
  click(event:any){
    $('.card-img').css("filter", "brightness(15%)");
    var a = event.target;
    a.style.filter = 'brightness(55%)';
    console.log(a.nextElementSibling.innerText);
    
    for (let index = 0; index < this.series.length; index++) {
      if(this.series[index].name == a.nextElementSibling.innerText){
        this.nameConsulta = this.series[index].name;
        console.log(this.nameConsulta);
      }
    }

    this.actualizarLista();
    
  }

  seleccionarArchivo(event:any) {
    var index = 0;
    var files = event.target.files;
    
    const reader = new FileReader();
    reader.onload = (e:any) =>{
      console.log("onload");
      
      var archivo = {
        serieName: this.CapInfo.serieName,
        numeroCap: this.CapInfo.numeroCap,
        nombreArchivo: "",
        base64textString: ""
      };
      archivo.nombreArchivo = files[index].name;
      archivo.base64textString = btoa(e.target.result); 
      this.buzon.push(archivo);

      index++;
      if(index < files.length){
        reader.readAsBinaryString(files[index]);
        
      }
      else{
        console.log(this.buzon);
      }
    }
    reader.readAsBinaryString(files[index]);
  }

  eliminarCap(cap: any){
    this.sureDelete = true;
    this.capBandera = cap;
  }
  cancelar(){
    this.sureDelete = false;
    this.capBandera = null;
  }
  envio:any = {
    numeroCap: "",
    serie: ""
  }
  confirmar(){
    this.envio.numeroCap = this.capBandera;
    this.envio.serie = this.getSerieName;
    console.log(this.envio);
    this.seriesService.deleteCap(this.envio.numeroCap, this.envio.serie).subscribe((a)=>{
      console.log(a);
      
      this.actualizarLista(); 
    });

    this.sureDelete = false;
    this.capBandera = null;
    
  }

  actualizarLista(){
    this.seriesService.getSerie(this.nameConsulta).subscribe((serie: any)=>{
      console.log(serie[1]);
      console.log(serie[0]);
      this.getSerieName = serie[0].name;
      this.CapInfo.serieName = serie[0].name;
      if(serie[1].length == 0){
        this.haycaps = 1;
      }
      else{
        this.haycaps = 2;
        this.serieCaps = serie[1];
      }

    });
  }

  upload() {
    this.seriesService.addCap(this.CapInfo).subscribe((r)=>{
      console.log("respuesta de addcap: " + r);
      console.log("capitulo agregado a la base de datos");

      console.log("subiendo las paginas");
      this.uploadPags();
      
    });

  }

  uploadPags(){
    for (let index = 0; index < this.buzon.length; index++) {
      let pag = this.buzon[index];
      console.log(pag);
      
      this.seriesService.addCapPags(pag).subscribe((r)=>{
        console.log("pag subida: " + r);
        
        
      })
    }
    this.actualizarLista();
    console.log("CAPITULO SUBIDO EXITOSAMENTE");
    
  }

}