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
import {AleatorioComponent} from '../aleatorio/aleatorio.component';
import {NavegacionComponent} from '../navegacion/navegacion.component';
import {Ventana1Component} from '../ventana1/ventana1.component';
import {Ventana2Component} from '../ventana2/ventana2.component';
import {CookiesComponent} from '../cookies/cookies.component';
import { NotasComponent } from '../notas/notas.component';
import {GaleriaComponent} from '../galeria/galeria.component';
import {TareasComponent} from '../tareas/tareas.component';
import {CalculadoraComprasComponent} from '../calculadora-compras/calculadora-compras.component';
import {EncuestaComponent} from '../encuesta/encuesta.component';
import {ContactosComponent} from '../contactos/contactos.component';
import {DashboardComponent} from '../dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    PruebaComponent,
    SaludoComponent,
    ContadorComponent,
    ListaTareasComponent,
    TemporizadorComponent,
    ComentariosComponent,
    TarjetaComponent,
    CalculadoraComponent,
    CompraComponent,
    FechaComponent,
    AleatorioComponent,
    NavegacionComponent,
    Ventana1Component,
    Ventana2Component,
    CookiesComponent,
    NotasComponent,
    GaleriaComponent,
    TareasComponent,
    CalculadoraComprasComponent,
    EncuestaComponent,
    ContactosComponent,
    DashboardComponent
  ],
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
