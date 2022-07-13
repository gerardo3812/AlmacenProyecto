import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciohomeRoutingModule } from './iniciohome-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ReporteComponent } from './reporte/reporte.component';
import { EditarproductoComponent } from './editarproducto/editarproducto.component';
import { AgregarproductoComponent } from './agregarproducto/agregarproducto.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    InicioComponent,
    NavbarComponent,
    ProductosComponent,
    ProveedorComponent,
    ReporteComponent,
    EditarproductoComponent,
    AgregarproductoComponent
  ],
  exports: [
    NavbarComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    IniciohomeRoutingModule,
    FormsModule
  ]
})
export class IniciohomeModule { }
