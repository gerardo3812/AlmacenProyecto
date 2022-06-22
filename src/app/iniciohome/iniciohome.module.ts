import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IniciohomeRoutingModule } from './iniciohome-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ReporteComponent } from './reporte/reporte.component';


@NgModule({
  declarations: [
    InicioComponent,
    NavbarComponent,
    ProductosComponent,
    ProveedorComponent,
    ReporteComponent
  ],
  exports: [
    NavbarComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    IniciohomeRoutingModule
  ]
})
export class IniciohomeModule { }
