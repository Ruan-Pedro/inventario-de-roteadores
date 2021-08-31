import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  routerData = null;
  constructor() { }

  ngOnInit(): void {
  }

  updateRouter(){}
  cancel(){};

}
