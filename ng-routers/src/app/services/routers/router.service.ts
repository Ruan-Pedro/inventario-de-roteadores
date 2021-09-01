import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { RouterData} from '../../models/routers/router.model'
import {Router} from '@angular/router'

const BASE_URL = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  api = "router"
  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private route:Router
  ) { }   

  showMSG(msg:string):void{
    this.snackBar.open(msg, 'close', {
      duration:5000,
      horizontalPosition:'end',
      verticalPosition:'top'
    })
  }

  read():Observable<{ data: RouterData[] }>{
    return this.http.get<{ data: RouterData[] }>(`${BASE_URL}/${this.api}`)
  }
  readById(id:string): Observable<{data:RouterData}>{
    const urlById = `${BASE_URL}/${this.api}/${id}`
    return this.http.get<{data:RouterData}>(urlById)
  }
  readByName(nome:string): Observable<{data:RouterData}>{
    const urlById = `${BASE_URL}/${this.api}/n/${nome}`
    return this.http.get<{data:RouterData}>(urlById)
  }

  create(routerData:RouterData): Observable<{ data: RouterData }> {
    return this.http.post<{ data: RouterData }>(`${BASE_URL}/${this.api}`, routerData)
  }

  deleteItem(id:string):Observable<Number>{
    const urlDel = `${BASE_URL}/${this.api}/${id}`
    return this.http.delete<Number>(urlDel)
  }

  updateItem(routerData:RouterData):Observable<{ data: RouterData }>{
    const url = `${BASE_URL}/${this.api}/${routerData.id_roteador}`
    return this.http.put<{ data: RouterData }>(url, routerData)}
}


