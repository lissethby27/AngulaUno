import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    CommonModule, FormsModule,],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.css'
})
export class EncuestaComponent {
// Preguntas y opciones
  preguntas = [
    {
      texto: '¿Cuál es tu lenguaje de programación favorito?',
      opciones: ['JavaScript', 'Python', 'Java', 'C#'],
      respuestaSeleccionada: '',
    },
    {
      texto: '¿Qué sistema operativo prefieres?',
      opciones: ['Windows', 'Linux', 'macOS', 'Otros'],
      respuestaSeleccionada: '',
    },
    {
      texto: '¿Cuál es tu framework favorito?',
      opciones: ['Angular', 'React', 'Vue', 'Otros'],
      respuestaSeleccionada: '',
    },
  ];

  // Controla si mostrar el resumen
  mostrarResumen = false;

  // Métodos
  enviarEncuesta() {
    this.mostrarResumen = true;
  }

  reiniciarEncuesta() {
    this.mostrarResumen = false;
    this.preguntas.forEach((pregunta) => (pregunta.respuestaSeleccionada = ''));
  }
}
