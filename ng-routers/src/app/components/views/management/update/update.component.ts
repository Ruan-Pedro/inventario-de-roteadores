import { Component, OnInit } from '@angular/core';
import { DialogPopupdelComponent } from 'src/app/components/dialog-popupdel/dialog-popupdel.component';
import { RouterService } from '../../../../services/routers/router.service';
import { MatDialog,MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { RouterData } from '../../../../models/routers/router.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['../management.component.scss','./update.component.scss']
})
export class UpdateComponent implements OnInit {
  routerDatas: RouterData[]

  constructor(
    private routerService: RouterService,
    public dialog: MatDialog) { }

  ngOnInit(): void {this.routerService.read().subscribe( routerDatas=>{
    this.routerDatas = routerDatas.data
    console.log(routerDatas)
  } )
}
}
