import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../../../services/routers/router.service';
import { RouterData } from '../../../../models/routers/router.model';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['../management.component.scss']
})
export class InsertComponent implements OnInit {
  routerData: RouterData = {
    nome:'',
    fabricante:'',
    garantia:'',
    suporte:'',
    justificativa:'',
    imagem: '',
    dat_cad:''
  }
  constructor(
    private RouterService: RouterService,
  ) { }

  ngOnInit(): void {
  }
  creatingData():void{
    this.RouterService.create(this.routerData).subscribe(()=>{
      this.RouterService.showMSG('Roteador Adcionado com sucesso!')
    })
  }
}
