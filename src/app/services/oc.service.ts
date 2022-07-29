import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { OC } from '../models/OC';

@Injectable({
  providedIn: 'root'
})
export class OsService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar) { }

  findAll():Observable<OC[]>{
    const url = this.baseUrl + "/oc";
    return this.http.get<OC[]>(url);
  }

  findById(id : any):Observable<OC>{
    const url = `${this.baseUrl}/oc/${id}`;
    return this.http.get<OC>(url);
  }

  create(oc: OC):Observable<OC>{
    const url = this.baseUrl + "/oc";
    return this.http.post<OC>(url, oc);
  }

  update(oc: OC):Observable<OC>{
    //const url = this.baseUrl + "/oc/" + oc.id;
    //Outra forma de fazer esta linha
    const url = `${this.baseUrl}/oc`;
    return this.http.put<OC>(url, oc);
  }

  delete(id: any): Observable<void>{
    const url = `${this.baseUrl}/oc/${id}`;
    return this.http.delete<void>(url);
  }

  message(msg : String): void{
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}