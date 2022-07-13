import { Component, OnInit } from '@angular/core';
import {ConsultaServiciosService, Datos} from "../../servicios/consulta-servicios.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  lista: Datos [] = [];

  constructor(private consultaService: ConsultaServiciosService, private router: Router) {
  }

  ngOnInit(): void {this.EjecutaConsulta()}

  EjecutaConsulta() {
    this.consultaService.consultaproducto().subscribe(
      res => {
        this.lista = res;
      });
  }

  Eliminarproducto(id: string) {
    this.consultaService.borrarproducto(id).subscribe(
      res => {
        console.log('Equipo Elimiadoo')
        this.EjecutaConsulta();
      });
  }

  modificarproducto(id: string) {
    this.router.navigate(['/editar/' + id]);

  }
}

