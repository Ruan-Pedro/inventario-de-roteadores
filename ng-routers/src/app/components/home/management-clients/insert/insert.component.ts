import { Router } from '@angular/router';
import { ClientsService } from './../../../../services/clients/clients.service';
import { ClientData } from '../../../../models/clients/client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
    
  clientData:ClientData ={
    cnpj: null,
    nome:'',
    tel: null,
    email: '',
    logo: '',
    data_cad:'',
    est_end:'',
    rua_end:'',
    n_end:null,
    pais_end:'',
    cid_end:'',
    bairro_end:'',
  }  
    constructor(
    private clientsService:ClientsService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  createClient(){
    this.clientsService.create(this.clientData).subscribe(()=>{
      this.clientsService.showMSG('Roteador Cadastrado com Sucesso')
      this.router.navigate(['clients/database'])
    })
  }
  cancel(){}

}
