import { Router, ActivatedRoute } from '@angular/router';
import { RouterService } from 'src/app/services/routers/router.service';
import { RouterData } from '../../../../../models/routers/router.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './updform.component.html',
  styleUrls: ['./updform.component.scss']
})
export class UpdformComponent implements OnInit {

  routerData:RouterData;

  constructor(
    private routerService:RouterService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
     const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.routerService.readById(id).subscribe(routerData=>{
      this.routerData = routerData.data
    })
  }

  updateRouter(){
    this.routerService.updateItem(this.routerData).subscribe(()=>{
      this.routerService.showMSG('Roteador Cadastrado com sucesso')
      this.router.navigate(['database'])
    })
  }

}
