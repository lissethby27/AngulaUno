import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesComponent {
  nombreUsuario: string | null = null;

  constructor() {
    this.nombreUsuario = this.getCookie('nombreUsuario');
    if (!this.nombreUsuario) {
      this.solicitarNombre();
    }
  }

  // Solicitar el nombre al usuario y guardar la cookie
  solicitarNombre() {
    const nombre = prompt('Por favor, introduce tu nombre:');
    if (nombre) {
      this.setCookie('nombreUsuario', nombre, 1); // Cookie de 1 día
      this.nombreUsuario = nombre;
    }
  }

  // Establecer cookie
  setCookie(nombre: string, valor: string, dias: number) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000)); // Duración de 1 día
    const expiracion = 'expires=' + fecha.toUTCString();
    document.cookie = nombre + '=' + valor + ';' + expiracion + ';path=/';
  }

  // Leer cookie
  getCookie(nombre: string): string | null {
    const nameEQ = nombre + '=';
    const cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i].trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }

  // Eliminar cookie
  borrarCookie(nombre: string) {
    this.setCookie(nombre, '', -1);
    this.nombreUsuario = null;
  }
}
