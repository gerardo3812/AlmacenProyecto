import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConsultaServiciosService {
  url = "http://localhost:3000/api"
  urlagregar = "http://localhost:3000/api/bd/inserta"
  urlproveedor = "http://localhost:3000/api/proveedor"
  urlanaquel= "http://localhost:3000/api/anaquel"
  constructor(private http: HttpClient) {console.log("Servicio corriendo")}

  consultaproducto(): Observable<any>
  {
    return this.http.get(this.url);
  }
  getproducto(id: string): Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  borrarproducto(id: string)
  {
    return  this.http.delete(this.url+'/'+id);
  }
  Editproducto(id: string, datos:any)
  {
    return this.http.put(this.url+'/'+id, datos)
  }

  agregarproducto(Datos: any){
    return this.http.post(this.urlagregar, Datos)
  }
  consultaprooveedor(): Observable<any>
  {
    return this.http.get(this.urlproveedor);
  }
  consultaanaquel(): Observable<any>
  {
    return this.http.get(this.urlanaquel);
  }

}
export interface Datos{
  IdProducto: string,
  IdProveedor?: string,
  IdAnaquel?: string,
  nombre?:string,
  descripcion?:string,
  precio_producto?:string,
  cantidad_producto?:string

}
export interface Datosproveedor{
  IdProveedor: string,
  nombre?:string,
  telefono?:string
}
export interface Datosanaquel{
  IdAnaquel: string,
  IdBodega:string,
  Nombre?:string
}
