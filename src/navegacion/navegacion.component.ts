import { Component } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {
  navegarAtras() {
    window.history.back(); // Navega hacia atrás en el historial
  }

  navegarAdelante() {
    window.history.forward(); // Navega hacia adelante en el historial
  }
}
