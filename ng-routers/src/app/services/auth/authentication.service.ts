import { UserService } from './../user/user.service';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators'

const BASE_URL = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  api = "user"
  
    nome:''
    email:''
    senha:''
  
  constructor(
    private http:HttpClient,
    private router:Router,
    private snackBar: MatSnackBar,
    private UserService:UserService
  ) { }

  showMSG(msg:string):void{
    this.snackBar.open(msg, 'close', {
      duration:5000,
      horizontalPosition:'end',
      verticalPosition:'top'
    })
  }
  authenticate(email:string, senha:string):Observable<HttpResponse<any>>{
    return this.http.post(`${BASE_URL}/${this.api}/login`,{
      email,senha
    }, {observe:'response'})
    .pipe(
      tap((res)=>{
        const authToken = res.headers.get('authorization') ?? '';
        this.UserService.saveToken(authToken)
      })
    )
  }

  register(nome:string,email:string,senha:string):Observable<any>{
    return this.http.post(`${BASE_URL}/${this.api}/register`,
    { nome,email,senha})
  }
}
