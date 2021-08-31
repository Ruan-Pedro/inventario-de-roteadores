import { RouterData } from '../../../../models/routers/router.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  routerData:RouterData
  constructor() { }

  ngOnInit(): void {
  }

  updateRouter(){}
  cancel(){}

}
