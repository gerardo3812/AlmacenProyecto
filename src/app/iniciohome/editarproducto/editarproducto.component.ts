import { Component, OnInit } from '@angular/core';
import {
  ConsultaServiciosService,
  Datos,
  Datosanaquel,
  Datosproveedor
} from "../../servicios/consulta-servicios.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.css']
})
export class EditarproductoComponent implements OnInit {
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
  constructor(private consultaservice: ConsultaServiciosService,private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {this.EjecutaConsulta(); this.EjecutaConsultaanaquel();
    const {id} = this.activeRoute.snapshot.params;
    const id_entrada= <string>id;
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){
      this.consultaservice.getproducto(id_entrada).subscribe(
        res=>{
          this.datos = res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      );
    }
  }
  modificar(){
    this.consultaservice.Editproducto(this.datos.IdProducto, this.datos).subscribe(
      res=>{
        console.log(res)
      },
      err => console.log(err)
    );
    this.router.navigate(['/inicio'])

  }
  EjecutaConsulta(){
    this.consultaservice.consultaprooveedor().subscribe(
      res=>{this.listaproveedor = res;});
  }
  EjecutaConsultaanaquel(){
    this.consultaservice.consultaanaquel().subscribe(
      res=>{this.listaanaquel = res;});
  }

}
