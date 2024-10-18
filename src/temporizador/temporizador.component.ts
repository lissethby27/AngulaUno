import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.css'
})
export class TemporizadorComponent {
  tiempo: number = 0;  // Variable para el tiempo ingresado en segundos
  cuentaRegresiva: number = 0;  // Tiempo actual de la cuenta regresiva
  intervalo: any = null;  // Variable para almacenar el ID del intervalo

  // Inicia la cuenta regresiva
  iniciarTemporizador() {
    // Si ya hay un temporizador en ejecución, no inicia uno nuevo
    if (this.intervalo) {
      return;
    }

    // Establece el tiempo de cuenta regresiva
    this.cuentaRegresiva = this.tiempo;

    // Inicia el intervalo que cuenta hacia atrás cada segundo
    this.intervalo = setInterval(() => {
      if (this.cuentaRegresiva > 0) {
        this.cuentaRegresiva--;
      } else {
        this.detenerTemporizador();  // Detiene el temporizador cuando llega a 0
      }
    }, 1000);  // El intervalo se ejecuta cada segundo
  }

  // Detiene el temporizador
  detenerTemporizador() {
    if (this.intervalo) {
      clearInterval(this.intervalo);  // Limpia el intervalo
      this.intervalo = null;
    }
  }

  // Reinicia el temporizador
  reiniciarTemporizador() {
    this.detenerTemporizador();
    this.cuentaRegresiva = this.tiempo;  // Reinicia al valor inicial
  }
}
