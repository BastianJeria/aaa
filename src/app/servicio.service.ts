import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  servidor="http://127.0.0.1:3025/";
  
  
  constructor(private servicio:HttpClient) { }

  Consultar():Observable<any>{
    return this.servicio.get(`${this.servidor}`);
  }

  Enviar(data:any):Observable<any>{
    console.log(data);
    return this.servicio.post(`${this.servidor}`, data);
  }

  Eliminar(id:any):Observable<any>{
    console.log(id);
    return this.servicio.get(`${this.servidor}`, id);
  }


  
}
