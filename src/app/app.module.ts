import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IniciohomeModule} from "./iniciohome/iniciohome.module";
import {IniciohomeRoutingModule} from "./iniciohome/iniciohome-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IniciohomeModule,
    IniciohomeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
