import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent implements OnInit, OnDestroy {
  horaActual: Date = new Date();  // Almacena la hora actual
  private intervaloId: any;       // Variable para almacenar el ID del intervalo
  isRunning: boolean = true;      // Controla si el contador está activo o detenido

  ngOnInit() {
    this.iniciarReloj();
  }

  // Inicia el intervalo para actualizar la hora cada segundo
  iniciarReloj() {
    this.intervaloId = setInterval(() => {
      this.horaActual = new Date();  // Actualiza la hora cada segundo
    }, 1000);
  }

  // Detiene el intervalo cuando se destruye el componente o se pulsa el botón
  ngOnDestroy() {
    if (this.intervaloId) {
      clearInterval(this.intervaloId);
    }
  }

  // Método para detener el reloj
  detenerReloj() {
    if (this.isRunning) {
      clearInterval(this.intervaloId);
      this.isRunning = false;
    } else {
      this.iniciarReloj();
      this.isRunning = true;
    }
  }
}
