import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Vendedora } from './../models/vendedora';

@Injectable({
  providedIn: 'root'
})
export class VendedoraService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar) { }

  findAll():Observable<Vendedora[]>{
    const url = this.baseUrl + "/vendedoras";
    return this.http.get<Vendedora[]>(url);
  }

  findById(id : any):Observable<Vendedora>{
    const url = `${this.baseUrl}/vendedoras/${id}`;
    return this.http.get<Vendedora>(url);
  }

  create(vendedora: Vendedora):Observable<Vendedora>{
    const url = this.baseUrl + "/vendedoras";
    return this.http.post<Vendedora>(url, vendedora);
  }

  update(vendedora: Vendedora):Observable<Vendedora>{
    //const url = this.baseUrl + "/vendedoras/" + vendedora.id;
    //Outra forma de fazer esta linha
    const url = `${this.baseUrl}/vendedoras/${vendedora.id}`;
    return this.http.put<Vendedora>(url, vendedora);
  }

  delete(id: any): Observable<void>{
    const url = `${this.baseUrl}/vendedoras/${id}`;
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
