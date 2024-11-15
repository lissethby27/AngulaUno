import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, CdkDropList, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    DragDropModule,
    CommonModule,
    CdkDropList,
    FormsModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  nuevaTarea: string = '';

  pendientes = ['Leer capítulo 5', 'Completar ejercicio 3', 'Revisar apuntes'];
  enProgreso: string[] = [];
  completadas: string[] = [];
  eliminadas: string[] = [];

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.pendientes.push(this.nuevaTarea.trim());
      this.nuevaTarea = '';
    }
  }

  moverTarea(event: CdkDragDrop<string[]>, listaDestino: string[]) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        listaDestino,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

