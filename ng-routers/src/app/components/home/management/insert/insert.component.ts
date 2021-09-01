import { RouterService } from 'src/app/services/routers/router.service';
import { Router } from '@angular/router';
import { RouterData } from '../../../../models/routers/router.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  routerData:RouterData ={
    nome: '',
    fabricante:'',
    garantia: '',
    suporte: '',
    justificativa: '',
    imagem: '',
    dat_cad:''
  }
  constructor(private router:Router,
    private routerService:RouterService) { }

  ngOnInit(): void { }

  createRouter(){
    this.routerService.create(this.routerData).subscribe(()=>{
      this.routerService.showMSG("Roteador Criado com Sucesso")
      this.router.navigate(['routers'])
    })
  }

}
