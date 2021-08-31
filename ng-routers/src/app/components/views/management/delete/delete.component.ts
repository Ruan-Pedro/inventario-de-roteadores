import { Component, OnInit } from '@angular/core';
import { DialogPopupdelComponent } from 'src/app/components/dialog-popupdel/dialog-popupdel.component';
import { RouterService } from '../../../services/router.service';
import { MatDialog,MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { RouterData } from '../router.model';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['../management.component.scss', './delete.component.scss']
})
export class DeleteComponent implements OnInit {
  routerDatas: RouterData[]

  constructor(
    private routerService: RouterService,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {this.routerService.read().subscribe( routerDatas=>{
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
  this.routerService.deleteItem(id_router).subscribe(()=>{
    console.log(id_router)
    this.routerService.showMSG(`Item ${id_router} Deletado com sucesso!`)
  })
  }
}
