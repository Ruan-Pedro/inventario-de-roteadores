import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterService } from '../services/router.service'
import { RouterData } from '../views/management/router.model'
import { Router } from '@angular/router'

interface DialogData {
  functionDel: Function,
  idRouter: number
}

@Component({
  selector: 'app-dialog-popupdel',
  templateUrl: './dialog-popupdel.component.html',
  styleUrls: ['./dialog-popupdel.component.scss']
})
export class DialogPopupdelComponent implements OnInit {
  
  routerDatas: RouterData[]
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private RouterService:RouterService,
    private route:Router
  ) { }

  ngOnInit(): void {
  }
  
  deleteLine(): void{
    this.data.functionDel(this.data.idRouter);
    this.RouterService.showMSG(`Item de id:${this.data.idRouter} deletado com sucesso!`)
    this.route.navigate(['/database'])
    // this.RouterService.deleteItem(id_router).subscribe(()=>{
    //   console.log(id_router)
    //   this.RouterService.showMSG(`Item ${id_router} Deletado com sucesso!`)
    // })
  }
}
