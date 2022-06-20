import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductosComponent} from "./productos/productos.component";
import {ProveedorComponent} from "./proveedor/proveedor.component";
import {IniciohomeModule} from "./iniciohome.module";
import {InicioComponent} from "./inicio/inicio.component";

const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'productos', component: ProductosComponent
      },
      {
        path: 'proveedor', component: ProveedorComponent
      },
      {
        path: 'inicio', component: InicioComponent
      },
      {
        path: 'iniciohome', loadChildren: () => import('./iniciohome.module').then(m => m.IniciohomeModule)
      }

    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IniciohomeRoutingModule { }
