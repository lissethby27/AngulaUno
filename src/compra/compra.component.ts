import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

interface articulo {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent {
  // Lista de artículos disponibles
  articulos: articulo[] = [
    { nombre: 'Manzana', precio: 1.0, cantidad: 0 },
    { nombre: 'Bocadillo', precio: 2.5, cantidad: 0 },
    { nombre: 'Leche', precio: 1.8, cantidad: 0 },
  ];

  // Suma total de la compra
  totalCompra: number = 0;

  // Método para incrementar la cantidad de un artículo
  incrementarCantidad(articulo: articulo) {
    articulo.cantidad++;
    this.calcularTotal();
  }

  // Método para disminuir la cantidad de un artículo
  disminuirCantidad(articulo: articulo) {
    if (articulo.cantidad > 0) {
      articulo.cantidad--;
      this.calcularTotal();
    }
  }

  // Método para calcular el total de la compra
  calcularTotal() {
    this.totalCompra = this.articulos.reduce((total, articulo) => {
      return total + (articulo.precio * articulo.cantidad);
    }, 0);
  }
}
