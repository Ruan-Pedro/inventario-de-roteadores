import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../../services/router.service';
import { RouterData } from '../router.model';

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
    imagem: ''
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
