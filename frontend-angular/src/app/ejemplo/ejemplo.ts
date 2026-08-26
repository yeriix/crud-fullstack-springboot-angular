import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ejemplo',
  styleUrl: './ejemplo.css',
  template: '<h1> Hola como estas, {{nombre}}</h1>',
})
export class Ejemplo {
  nombre : string = 'Yeray';
}
