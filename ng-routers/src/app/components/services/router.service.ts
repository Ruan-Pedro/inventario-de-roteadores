import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { RouterData} from '../views/management/router.model'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  baseUrl = "http://192.168.0.111:5050/api"
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

  read():Observable<RouterData[]>{
    return this.http.get<RouterData[]>(`${this.baseUrl}/all`)
  }
  readById(id:string): Observable<RouterData>{
    const urlById = `${this.baseUrl}/all/${id}`
    return this.http.get<RouterData>(urlById)
  }

  create(routerData:RouterData): Observable<RouterData> {
    console.log(`${this.baseUrl}/insertrouter`)
    console.log(routerData)
    return this.http.post<RouterData>(`${this.baseUrl}/insertrouter`, routerData)
  }

  deleteItem(id:string):Observable<Number>{
    const urlDel = `${this.baseUrl}/deleterouter/${id}`
    console.log(urlDel);
    // this.route.navigate(['/management'])
    location.reload()
    return this.http.delete<Number>(urlDel)
  }

  updateItem(routerData:RouterData):Observable<RouterData>{
    const url = `${this.baseUrl}/updaterouter/${routerData.id_roteador}`
    console.log(routerData.id_roteador)
    return this.http.put<RouterData>(url, routerData)}
}


