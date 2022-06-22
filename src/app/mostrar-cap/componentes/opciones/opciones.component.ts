
import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SeriesService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit {
  @Input() capAct: number = 0;
  @Input() nameSerie: any;
  @Input() idSerie: any;

  siguiente: boolean = false;
  capPlus: any;
  anterior: boolean = false;
  capMinus: any;
  caps: any;
  capCan: any;

  constructor(
    private serieService: SeriesService,
    private router: Router
  ) {
   }

  ngOnInit(): void {
    
    this.serieService.getCaps(this.nameSerie).subscribe((a: any)=>{
      
      this.caps = a;
      console.log(a);
    
      for (let i = 0; i < a.length; i++) {
        const element = a[i].numeroCap;

        if(Number(this.capAct) + 0.5 == element){
          this.siguiente = true;
          this.capPlus = Number(this.capAct) + 0.5;
          console.log(this.capPlus);
          console.log("activado +05");
          break;
        }
        else if(Number(this.capAct) + 1 == element){
          this.capPlus = Number(this.capAct) + 1;
          this.siguiente = true;
          console.log(this.capPlus);
          console.log("activado +1");
        }

      }

      for (let i = 0; i < a.length; i++) {
        const element = a[i].numeroCap;
      
        if(Number(this.capAct) - 0.5 == element){
          this.capMinus = Number(this.capAct) - 0.5;
          this.anterior = true;
          console.log(this.capMinus);
          console.log("activado -05");
          break;
        }
        else if(Number(this.capAct) - 1 == element){
          this.capMinus = Number(this.capAct) - 1;
          this.anterior = true;
          console.log(this.capMinus);
          console.log("activado -1");
        }
        
      }
    })    
  }
  
  loadPrevCap() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/cap', this.nameSerie, this.capMinus]);
    
  }
  loadNextCap() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/cap', this.nameSerie, this.capPlus]);
    
  }

}
