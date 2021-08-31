import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './updform.component.html',
  styleUrls: ['./updform.component.scss']
})
export class UpdformComponent implements OnInit {

  routerData = null;

  constructor() { }

  ngOnInit(): void {
  }

  updateRouter(){}
  cancel(){};

}
