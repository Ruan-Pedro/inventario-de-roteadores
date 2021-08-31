import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/routers/router.service';
import { RouterData } from '../../../../models/routers/router.model';
import { DialogPopupdelComponent } from 'src/app/components/dialog-popupdel/dialog-popupdel.component';

@Component({
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  routerDatas: RouterData[]

  constructor(
    private RouterService:RouterService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.RouterService.read().subscribe( routerDatas=>{
      this.routerDatas = routerDatas.data
      console.log(routerDatas)
  })
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
deleteLine(id_router): void{
    this.RouterService.deleteItem(id_router).subscribe(()=>{
      console.log(id_router)
      this.RouterService.showMSG(`Item ${id_router} Deletado com sucesso!`)
      location.reload()
    })
  }

}
