import { Router } from '@angular/router';
import { ClientsService } from './../../../../services/clients/clients.service';
import { ClientData } from '../../../../models/clients/client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  clientDatas:ClientData[]
  constructor(
    private clientsService:ClientsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.clientsService.read().subscribe(clientData=>{
      this.clientDatas = clientData.data
    })
  }

}
