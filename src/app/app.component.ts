import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import {PruebaComponent} from '../prueba/prueba.component';
import {SaludoComponent} from '../saludo/saludo.component';
import {ContadorComponent} from '../contador/contador.component';
import {ListaTareasComponent} from '../lista-tarea/lista-tarea.component';
import {TemporizadorComponent} from '../temporizador/temporizador.component';
import {ComentariosComponent} from '../comentarios/comentarios.component';
import {TarjetaComponent} from '../tarjeta/tarjeta.component';
import {CalculadoraComponent} from '../calculadora/calculadora.component';
import {CompraComponent} from '../compra/compra.component';
import {FechaComponent} from '../fecha/fecha.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PruebaComponent, SaludoComponent,ContadorComponent,
    ListaTareasComponent, TemporizadorComponent, ComentariosComponent, TarjetaComponent,
    CalculadoraComponent, CompraComponent, FechaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicaAngula';
  comentarios: string[] = [];

  comentarioEnviado(comentario: string) {
    this.comentarios.push(comentario);
  }
}
