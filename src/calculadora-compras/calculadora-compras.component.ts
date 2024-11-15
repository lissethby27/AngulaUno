import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-calculadora-compras',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule],
  templateUrl: './calculadora-compras.component.html',
  styleUrl: './calculadora-compras.component.css'
})
export class CalculadoraComprasComponent {
  formulario: FormGroup;
  productos: { nombre: string; precio: number; cantidad: number; total: number }[] = [];
  totalCompra: number = 0;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(0.01)]],
      cantidad: [null, [Validators.required, Validators.min(1)]],
    });
  }

  agregarProducto() {
    if (this.formulario.valid) {
      const { nombre, precio, cantidad } = this.formulario.value;
      const total = precio * cantidad;

      this.productos.push({ nombre, precio, cantidad, total });
      this.totalCompra += total;

      this.formulario.reset();
    }
  }

  reiniciar() {
    this.formulario.reset();
    this.productos = [];
    this.totalCompra = 0;
  }
}


