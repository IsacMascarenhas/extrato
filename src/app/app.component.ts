import { Component } from '@angular/core';
import { ExtratoServie } from './extratos/extrato.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  extratos: Object[] = [];

  constructor(extratoService: ExtratoServie){
    extratoService
      .getUrlName("/getExtrato")
      .subscribe(extratos => {this.extratos = extratos; console.log ("teste", extratos)});
  }
}
