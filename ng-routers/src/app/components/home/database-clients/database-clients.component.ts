import { ClientsService } from './../../../services/clients/clients.service';
import { ClientData } from '../../../models/clients/client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './database-clients.component.html',
  styleUrls: ['./database-clients.component.scss']
})
export class DatabaseClientsComponent implements OnInit {

  clientDatas:ClientData[]
  constructor(
    private clientService:ClientsService
  ) { }

  ngOnInit(): void {
    this.clientService.read().subscribe( clientData =>{
      this.clientDatas = clientData.data
    })
  }

}
