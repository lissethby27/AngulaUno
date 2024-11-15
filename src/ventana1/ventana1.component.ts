import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ventana1',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ventana1.component.html',
  styleUrl: './ventana1.component.css'
})
export class Ventana1Component {
  private nuevaVentana: Window | null = null;

  abrirVentana() {
    // Abrir una ventana en blanco
    this.nuevaVentana = window.open('about:blank', '_blank', 'width=400,height=400');
    if (this.nuevaVentana) {
      this.nuevaVentana.document.write('<h1>Ventana Interactiva</h1>');
    } else {
      alert('El navegador bloqueó la apertura de la ventana.');
    }
  }

  mostrarResolucion() {
    if (this.nuevaVentana) {
      // Mostrar la resolución actual de la ventana
      alert(`Resolución de la ventana: ${this.nuevaVentana.innerWidth} x ${this.nuevaVentana.innerHeight}`);
    } else {
      alert('La ventana no está abierta.');
    }
  }

  redimensionarVentana() {
    if (this.nuevaVentana) {
      // Redimensionar la ventana a 900x900
      this.nuevaVentana.resizeTo(900, 900);
      alert('La ventana ha sido redimensionada a 900x900.');
    } else {
      alert('La ventana no está abierta.');
    }
  }
}
