import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IniciohomeModule} from "./iniciohome/iniciohome.module";
import {InicioComponent} from "./iniciohome/inicio/inicio.component";
//import {AgregarusuarioComponent} from "./iniciohome/agregarusuario/agregarusuario.component";
//import {EditarusuarioComponent} from "./iniciohome/editarusuario/editarusuario.component";
import {AgregarproductoComponent} from "./iniciohome/agregarproducto/agregarproducto.component";
import {EditarproductoComponent} from "./iniciohome/editarproducto/editarproducto.component";
import {ProductosComponent} from "./iniciohome/productos/productos.component";


const routes: Routes = [
  {
    path:'iniciohome',component:IniciohomeModule
  },
  {path:'', redirectTo: '/inicio',pathMatch:'full'},
  {path:'inicio', component: InicioComponent},
  {path:'agregarproducto', component: AgregarproductoComponent},
  {path:'editarproducto/:id', component: EditarproductoComponent},
  {path:'productos', component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
