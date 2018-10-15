import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { ExtratosModule } from './extratos/extratos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ExtratosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
