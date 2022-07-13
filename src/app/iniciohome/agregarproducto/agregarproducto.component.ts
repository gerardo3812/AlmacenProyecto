import { Component, OnInit } from '@angular/core';
import {
  ConsultaServiciosService,
  Datos,
  Datosanaquel,
  Datosproveedor
} from "../../servicios/consulta-servicios.service";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
//import * as stream from "stream";

@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.component.html',
  styleUrls: ['./agregarproducto.component.css']
})
export class AgregarproductoComponent implements OnInit {
  lista : Datos []=[];
  listaproveedor : Datosproveedor []=[];
  listaanaquel : Datosanaquel []=[];
  datos: Datos={
    IdProducto: '',
    IdProveedor: '',
    IdAnaquel:'',
    nombre:'',
    descripcion:'',
    precio_producto:'',
    cantidad_producto:''
  }
  datosproveedor: Datosproveedor=
    {
      IdProveedor: '',
      nombre:'',
      telefono:''
    }
  datosanaquel: Datosanaquel=
    {
      IdAnaquel: '',
      IdBodega:'',
      Nombre:''
    }
    opcionSeleccionado: string = '0';
  verSeleccion:string = '';
  constructor(private consultaservice: ConsultaServiciosService, private router: Router) { }

  ngOnInit(): void {this.EjecutaConsulta(); this.EjecutaConsultaanaquel();
  }
capturar(){
    this.verSeleccion = this.opcionSeleccionado;
}

  EjecutaConsulta(){
    this.consultaservice.consultaprooveedor().subscribe(
      res=>{this.listaproveedor = res;});
  }
  EjecutaConsultaanaquel(){
    this.consultaservice.consultaanaquel().subscribe(
      res=>{this.listaanaquel = res;});
  }

  agregar(){
    //delete this.datos.IdUsuario;

    this.consultaservice.agregarproducto(this.datos).subscribe();
    this.router.navigate(['/productos'])
  }
}
