import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  estudiantes = [
    { nombre: 'Ana', nota: 6 },
    { nombre: 'Carlos', nota: 4 },
    { nombre: 'Laura', nota: 8 }
  ];

  filtroNombre: string = '';
  filtroEstado: string = '';

  agregarEstudiante() {
    // Código para agregar estudiantes dinámicamente
  }

  filtrarEstudiantes() {
    return this.estudiantes.filter((estudiante) => {
      const coincideNombre = estudiante.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase());
      const estado = estudiante.nota >= 5 ? 'Aprobado' : 'Suspenso';
      const coincideEstado = this.filtroEstado === '' || estado === this.filtroEstado;
      return coincideNombre && coincideEstado;
    });
  }

  obtenerEstado(nota: number): string {
    return nota >= 5 ? 'Aprobado' : 'Suspenso';
  }
}
