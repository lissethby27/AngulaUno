import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-tarea',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Asegúrate de usar esta única vez
  templateUrl: './lista-tarea.component.html',
  styleUrls: ['./lista-tarea.component.css']  // Corrige el nombre a 'styleUrls'
})
export class ListaTareasComponent {
  nuevaTarea: string = '';  // Variable para almacenar la nueva tarea
  tareas: string[] = [];    // Array para almacenar las tareas
  mostrarTareas: boolean = true;  // Controla si la lista es visible o no

  // Método para agregar una tarea a la lista
  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this.tareas.push(this.nuevaTarea.trim());
      this.nuevaTarea = '';  // Limpiar el campo de entrada
    }
  }

  // Método para eliminar una tarea de la lista
  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);  // Elimina la tarea según el índice
  }

  // Método para alternar la visibilidad de la lista
  alternarVisibilidad() {
    this.mostrarTareas = !this.mostrarTareas;
  }
}
