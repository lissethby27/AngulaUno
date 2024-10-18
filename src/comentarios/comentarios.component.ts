import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  comentario: string = '';  // Almacena el comentario ingresado por el usuario

  // Emite el comentario al componente padre
  @Output() comentarioEnviado = new EventEmitter<string>();

  // Método para enviar el comentario
  enviarComentario() {
    if (this.comentario.trim() !== '') {
      this.comentarioEnviado.emit(this.comentario);  // Emite el comentario
      this.comentario = '';  // Limpia el campo de texto después de enviar
    }
  }
}
