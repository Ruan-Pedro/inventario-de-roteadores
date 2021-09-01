import { ClientsService } from './../../../../services/clients/clients.service';
import { Component, OnInit } from '@angular/core';
import { DialogPopupdelComponent } from 'src/app/components/dialog-popupdel/dialog-popupdel.component';
import { RouterService } from '../../../../services/routers/router.service';
import { MatDialog,MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ClientData } from '../../../../models/clients/client.model';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['../management.component.scss', './delete.component.scss']
})
export class DeleteComponent implements OnInit {
  clientDatas: ClientData[]

  
  constructor(
    private clientsService: ClientsService,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.clientsService.read().subscribe(clientData =>{
      this.clientDatas = clientData.data
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
    functionDel: (id_cliente: number) => {
      this.deleteLine(idRouter);
    },
    idRouter
  }
  this.dialog.open(DialogPopupdelComponent, dialogConfig)
}
// openDialog():void{
//   this.RouterService.openDialog()
// }

deleteLine(id_cliente): void{
  this.clientsService.deleteItem(id_cliente).subscribe(()=>{
    console.log(id_cliente)
    this.clientsService.showMSG(`Item ${id_cliente} Deletado com sucesso!`)
    location.reload()
  })
  }
}
