import { RouterService } from '../../../../../services/routers/router.service';
import { Component, OnInit } from '@angular/core';
import { RouterData } from '../../../../../models/routers/router.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss','../../management.component.scss']
})
export class UpdateFormComponent implements OnInit {
  routerData: RouterData 

  constructor(
    private RouterService: RouterService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.RouterService.readById(id).subscribe(routerData =>{
      console.log(routerData)
      this.routerData = routerData.data
    })
  }
  cancel():void {
    // console.log(this.routerData)
    this.router.navigate(['/management'])
  }
  updateRouter():void{
    this.RouterService.updateItem(this.routerData).subscribe(()=>{
      this.RouterService.showMSG('Item atualizado com sucesso!')
      this.router.navigate(['/management/update'])
    })
  }
}
