import { Component } from '@angular/core';

@Component({
  selector: 'app-ventana2',
  standalone: true,
  imports: [],
  templateUrl: './ventana2.component.html',
  styleUrl: './ventana2.component.css'
})
export class Ventana2Component {
  private nuevaVentana: Window | null = null;
  private posicionX: number = 100; // Posición inicial X
  private posicionY: number = 100; // Posición inicial Y

  abrirVentana() {
    // Abre una nueva ventana de tamaño 400x400
    this.nuevaVentana = window.open('', 'ventanaMovible', 'width=400,height=400,left=100,top=100');
    if (this.nuevaVentana) {
      this.posicionX = 100;
      this.posicionY = 100;
      this.nuevaVentana.document.write('<h1>Ventana Movible</h1>');
      this.nuevaVentana.focus(); // Asegura que la ventana tenga foco
    } else {
      alert('El navegador bloqueó la apertura de la ventana.');
    }
  }

  moverArriba() {
    if (this.nuevaVentana && !this.nuevaVentana.closed) {
      this.posicionY -= 100;
      this.nuevaVentana.moveTo(this.posicionX, this.posicionY);
    } else {
      alert('La ventana no está abierta o se ha cerrado.');
    }
  }

  moverAbajo() {
    if (this.nuevaVentana && !this.nuevaVentana.closed) {
      this.posicionY += 100;
      this.nuevaVentana.moveTo(this.posicionX, this.posicionY);
    } else {
      alert('La ventana no está abierta o se ha cerrado.');
    }
  }

  moverIzquierda() {
    if (this.nuevaVentana && !this.nuevaVentana.closed) {
      this.posicionX -= 100;
      this.nuevaVentana.moveTo(this.posicionX, this.posicionY);
    } else {
      alert('La ventana no está abierta o se ha cerrado.');
    }
  }

  moverDerecha() {
    if (this.nuevaVentana && !this.nuevaVentana.closed) {
      this.posicionX += 100;
      this.nuevaVentana.moveTo(this.posicionX, this.posicionY);
    } else {
      alert('La ventana no está abierta o se ha cerrado.');
    }
  }
}
