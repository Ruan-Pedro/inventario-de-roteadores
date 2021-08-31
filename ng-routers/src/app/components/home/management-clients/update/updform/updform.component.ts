import { RouterData } from '../../../../../models/routers/router.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './updform.component.html',
  styleUrls: ['./updform.component.scss']
})
export class UpdformComponent implements OnInit {

  routerData:RouterData
  constructor() { }

  ngOnInit(): void {
  }

  updateRouter(){}
  cancel(){}
}
