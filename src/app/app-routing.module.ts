import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IniciohomeModule} from "./iniciohome/iniciohome.module";


const routes: Routes = [
  {
    path:'iniciohome',component:IniciohomeModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
