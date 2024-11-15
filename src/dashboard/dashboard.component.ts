import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData, ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Datos del gráfico de barras
  barChartData: ChartData<'bar'> = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      { data: [65, 59, 80, 81, 56], label: 'Ventas' },
      { data: [28, 48, 40, 19, 86], label: 'Compras' },
    ],
  };

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  barChartType: ChartType = 'bar';

  // Datos del gráfico de torta
  pieChartData: ChartData<'pie'> = {
    labels: ['Usuarios Activos', 'Usuarios Inactivos', 'Usuarios Nuevos'],
    datasets: [
      {
        data: [300, 50, 100],
      },
    ],
  };

  pieChartType: ChartType = 'pie';

  // Actualizar los datos manualmente
  actualizarDatos() {
    this.barChartData = {
      ...this.barChartData,
      datasets: [
        { data: [Math.random() * 100, 59, 80, 81, 56], label: 'Ventas' },
        { data: [28, Math.random() * 100, 40, 19, 86], label: 'Compras' },
      ],
    };

    this.pieChartData = {
      ...this.pieChartData,
      datasets: [
        {
          data: [
            Math.random() * 300,
            Math.random() * 50,
            Math.random() * 100,
          ],
        },
      ],
    };
  }
}
