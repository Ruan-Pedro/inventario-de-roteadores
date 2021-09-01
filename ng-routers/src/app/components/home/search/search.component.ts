import { Router } from '@angular/router';
import { RouterService } from '../../../services/routers/router.service';
import { ClientsService } from './../../../services/clients/clients.service';
import { RouterData } from '../../../models/routers/router.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  routerDatas:RouterData
  
  constructor(
    private routerService:RouterService,
    private router:Router
  ) { }

  ngOnInit(): void {
        
  }
  search(){
    this.router.navigate([`search/${this.routerDatas}`])
  }
}
