import { Router } from '@angular/router';
import { AuthenticationService } from './../../../services/auth/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  nome = ''
  email = ''
  senha = ''
  confirmSenha=''
  constructor(
    private authenticationService:AuthenticationService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  register(){
    if(this.senha == this.confirmSenha){
      this.authenticationService.register(this.nome,this.email,this.senha).subscribe(()=>{
        this.authenticationService.showMSG('Usuário cadastrado com sucesso')
        this.router.navigate(['login'])
      },(error)=>{
        this.authenticationService.showMSG("Falha na autenticação")
      })

    }else{
      this.authenticationService.showMSG("Confira a confirmação de sua senha")
    }
  }
}
