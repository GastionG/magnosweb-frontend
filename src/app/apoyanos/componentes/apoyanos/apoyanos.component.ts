import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/models/links';


@Component({
  selector: 'app-apoyanos',
  templateUrl: './apoyanos.component.html',
  styleUrls: ['./apoyanos.component.css']
})
export class ApoyanosComponent implements OnInit {

  constructor(
    public enlaces: Links
  ) { }

  
  ngOnInit(): void {
    
  }

}
