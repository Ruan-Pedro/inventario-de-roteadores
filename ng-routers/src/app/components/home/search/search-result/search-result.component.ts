import { ActivatedRoute, Router } from '@angular/router';
import { RouterService } from './../../../../services/routers/router.service';
import { RouterData } from '../../../../models/routers/router.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  routerData:RouterData
  
  constructor(
    private routerServide:RouterService,
    private activetedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    const routerName = this.activetedRoute.snapshot.queryParamMap.get('nome')
    this.routerServide.readByName(routerName).subscribe(routerData=>{
      this.routerData = routerData.data
      console.log(routerData)
      console.log(this.routerData, routerName)
    },error=>{
      console.log(error)
    })
  }
  search(){
    this.router.navigate([`search/n/${this.routerData.nome}`])
  }
}
