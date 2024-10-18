import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  @Input()
  saludo: string = '';
  constructor() {
    this.generarSaludo();
  }
  generarSaludo() {
    this.saludo = '¡Hola, bienvenido a la aplicación Angular!';

  }

}
