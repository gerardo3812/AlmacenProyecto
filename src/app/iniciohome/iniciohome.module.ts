import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IniciohomeRoutingModule } from './iniciohome-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { ProveedorComponent } from './proveedor/proveedor.component';


@NgModule({
  declarations: [
    InicioComponent,
    NavbarComponent,
    ProductosComponent,
    ProveedorComponent
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
