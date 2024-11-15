import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aleatorio',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.css' ]  // Corregido
})
export class AleatorioComponent {
  cantidadNumeros: number = 1;  // Cantidad de números aleatorios a generar
  numerosGenerados: number[] = [];  // Almacena los números aleatorios generados

  // Método para generar los números aleatorios
  generarNumerosAleatorios() {
    this.numerosGenerados = [];  // Limpia el array antes de generar nuevos números
    for (let i = 0; i < this.cantidadNumeros; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 100) + 1;  // Genera un número entre 1 y 100
      this.numerosGenerados.push(numeroAleatorio);  // Añade el número generado al array
    }
  }
}
