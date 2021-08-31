import { RouterData } from '../../../models/routers/router.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './database-clients.component.html',
  styleUrls: ['./database-clients.component.scss']
})
export class DatabaseClientsComponent implements OnInit {

  routerDatas: RouterData[]
  constructor() { }

  ngOnInit(): void {
  }

}
