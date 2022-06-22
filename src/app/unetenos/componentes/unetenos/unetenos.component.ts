import { Component, OnInit } from '@angular/core';
import { Links } from 'src/app/models/links';

@Component({
  selector: 'app-unetenos',
  templateUrl: './unetenos.component.html',
  styleUrls: ['./unetenos.component.css']
})
export class UnetenosComponent implements OnInit {

  constructor(
    public enlaces: Links
  ) { }

  ngOnInit(): void {
  }

}
