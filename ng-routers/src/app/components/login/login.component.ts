import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/auth/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  senha = '';
  constructor(
    private authenticationService:AuthenticationService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  login(){
    this.authenticationService.authenticate(this.email,this.senha).subscribe(()=>{
      this.authenticationService.showMSG("Login realizado com sucesso")
      this.router.navigate(['home'])
    }, (error)=>{
      this.authenticationService.showMSG("Falha ao Autenticar")
    })
  }
}
