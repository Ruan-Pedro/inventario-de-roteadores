import { DialogPopupdelComponent } from '../../dialog-popupdel/dialog-popupdel.component';
import { RouterService } from '../../services/router.service';
import { Component, OnInit } from '@angular/core';
import { RouterData } from '../management/router.model'
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {
  
  routerDatas: RouterData[]
  constructor(
    private RouterService:RouterService,
    public dialog: MatDialog

  ) {  }

  ngOnInit(): void {
    this.RouterService.read().subscribe( routerDatas=>{
      this.routerDatas = routerDatas
      console.log(routerDatas)
    } )
  }

  openDialog(idRouter: number){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.width = '35%'
    dialogConfig.height = '30%',
    dialogConfig.backdropClass = "bdrop",
    dialogConfig.position = {
      'top':'15%',
      'right':'450px'
    }
    dialogConfig.data = {
      functionDel: (id_router: number) => {
        this.deleteLine(idRouter);
      },
      idRouter
    }
    this.dialog.open(DialogPopupdelComponent, dialogConfig)
  }
  // openDialog():void{
  //   this.RouterService.openDialog()
  // }

  deleteLine(id_router): void{
    this.RouterService.deleteItem(id_router).subscribe(()=>{
      console.log(id_router)
      this.RouterService.showMSG(`Item ${id_router} Deletado com sucesso!`)
    })
  }
}
