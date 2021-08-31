import { RouterData } from '../../../../models/routers/router.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  
  routerDatas:RouterData[]
  constructor() { }

  ngOnInit(): void {
  }

}
