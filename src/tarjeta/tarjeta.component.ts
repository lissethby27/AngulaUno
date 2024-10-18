import {Component, Input} from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  @Input() nombre: string = '';
  @Input() descripcion: string = '';
  @Input() precio: number = 0;
}
