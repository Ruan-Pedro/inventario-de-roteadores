import { RouterData } from '../../../../models/routers/router.model';
import { MatDialog } from '@angular/material/dialog';
import { RouterService } from '../../../../services/routers/router.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  
  routerDatas:RouterData[]

  constructor(
    private routerService: RouterService,
    public dialog: MatDialog
  ) { }

    ngOnInit(): void {this.routerService.read().subscribe( routerDatas=>{
      this.routerDatas = routerDatas.data
      console.log(routerDatas)
    } )
  }

}
