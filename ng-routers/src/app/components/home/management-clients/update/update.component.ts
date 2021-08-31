import { RouterData } from '../../../../models/routers/router.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  routerDatas:RouterData[]
  constructor() { }

  ngOnInit(): void {
  }

}
