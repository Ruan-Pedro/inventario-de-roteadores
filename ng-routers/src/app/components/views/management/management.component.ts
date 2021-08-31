import { RouterService } from '../../../services/routers/router.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  
  constructor(
    private route: Router,
  ) {  }

  ngOnInit(): void {
   
  }
  // propLegal = "fonzera!"
  // teste():void{
  //   console.log('funcionou? XD')
  //    fetch("http://192.168.0.111:5050/api/all").then(res=>{
  //      return res.json()
  //    }).then(json=>{
  //      console.log(json)
  //    })
  // }
  

}
