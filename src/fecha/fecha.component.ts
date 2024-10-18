import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha',
  standalone: true,
  imports: [],
  templateUrl: './fecha.component.html',
  styleUrl: './fecha.component.css'
})
export class FechaComponent {
  fechaHoraActual: string = '';

  constructor() {
    this.actualizarFechaHora();  // Actualiza la fecha y hora al iniciar el componente
    setInterval(() => this.actualizarFechaHora(), 1000);  // Actualiza cada segundo
  }

  // Método para obtener la fecha y hora actual en formato dd-mm-yyyy hh:mm:ss
  actualizarFechaHora() {
    const ahora = new Date();
    const dia = this.formatearNumero(ahora.getDate());
    const mes = this.formatearNumero(ahora.getMonth() + 1);  // Los meses comienzan en 0
    const año = ahora.getFullYear();
    const horas = this.formatearNumero(ahora.getHours());
    const minutos = this.formatearNumero(ahora.getMinutes());
    const segundos = this.formatearNumero(ahora.getSeconds());

    this.fechaHoraActual = `${dia}-${mes}-${año} ${horas}:${minutos}:${segundos}`;
  }

  // Método para formatear los números agregando un 0 si es menor a 10
  formatearNumero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}
