import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { ClientData} from '../../models/clients/client.model'
import {Router} from '@angular/router'

const BASE_URL = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  api = "client"
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

  read():Observable<{ data: ClientData[] }>{
    return this.http.get<{ data: ClientData[] }>(`${BASE_URL}/${this.api}`)
  }
  readById(id:string): Observable<{data:ClientData}>{
    const urlById = `${BASE_URL}/${this.api}/${id}`
    return this.http.get<{ data:ClientData }>(urlById)
  }

  create(clientData:ClientData): Observable<{ data: ClientData }> {
    return this.http.post<{ data: ClientData }>(`${BASE_URL}/${this.api}`, clientData)
  }

  deleteItem(id:number):Observable<Number>{
    const urlDel = `${BASE_URL}/${this.api}/${id}`
    return this.http.delete<Number>(urlDel)
  }

  updateItem(clientData:ClientData):Observable<{ data: ClientData }>{
    const url = `${BASE_URL}/${this.api}/${clientData.id_cliente}`
    return this.http.put<{ data: ClientData }>(url, clientData)}
}


