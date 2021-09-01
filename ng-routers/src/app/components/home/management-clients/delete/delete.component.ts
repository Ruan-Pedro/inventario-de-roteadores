import { Router } from '@angular/router';
import { ClientsService } from './../../../../services/clients/clients.service';
import { Component, OnInit } from '@angular/core';
import { DialogPopupdelComponent } from 'src/app/components/dialog-popupdel/dialog-popupdel.component';
import { MatDialog,MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ClientData } from '../../../../models/clients/client.model';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  clientDatas: ClientData[]

  
  constructor(
    private clientsService: ClientsService,
    public dialog: MatDialog,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.clientsService.read().subscribe(clientData =>{
      this.clientDatas = clientData.data
    })
  
}

openDialog(idClient: number){
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
      this.deleteLine(idClient);
    },
    idClient
  }
  this.dialog.open(DialogPopupdelComponent, dialogConfig)
}


deleteLine(id_cliente): void{
  this.clientsService.deleteItem(id_cliente).subscribe(()=>{
    console.log(id_cliente)
    this.clientsService.showMSG(`Item ${id_cliente} Deletado com sucesso!`)
    this.router.navigate(['clients/management/delete'])
  })
  }
}
