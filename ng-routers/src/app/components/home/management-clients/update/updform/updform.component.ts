import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from './../../../../../services/clients/clients.service';
import { ClientData } from '../../../../../models/clients/client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './updform.component.html',
  styleUrls: ['./updform.component.scss']
})
export class UpdformComponent implements OnInit {

  clientDatas:ClientData
  constructor(
    private clientService:ClientsService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.clientService.readById(id).subscribe(clientData=>{
      this.clientDatas = clientData.data
    })

  }

  updateClient(){
    this.clientService.updateItem(this.clientDatas).subscribe(()=>{
      this.clientService.showMSG("Produto Atualizado Com Sucesso")
      this.router.navigate(['update'])
    })
  }
}
