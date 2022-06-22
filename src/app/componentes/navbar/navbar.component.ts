import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/models/links';

import { trigger, state, style} from '@angular/animations';

import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('click', [
      state('true', style({
        background: 'linear-gradient(181deg, #ff39e5 30%, #bd33ff 70%)'
      })),
      state('false', style({
        background: 'gray'
      }))
    ])
  ]
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
    router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(event => {
      let route = router.url;
      console.log(route);
      this.comprobarUrl(route);
      
    })
  }
  
  enlaces: Links = new Links;
  sI: boolean = false;
  sU: boolean = false;
  sA: boolean = false;


  ngOnInit(): void {
    
  }

  comprobarUrl(u:string){
    if(u == "/"){
      this.sI = true;
      this.sU = false;
      this.sA = false;
    }
    else if(u == "/unetenos"){
      this.sI = false;
      this.sU = true;
      this.sA = false;
    }
    else if(u == "/apoyanos"){
      this.sI = false;
      this.sU = false;
      this.sA = true;
    }
    else{
      this.sI = false;
      this.sU = false;
      this.sA = false;
    }
  }


}
