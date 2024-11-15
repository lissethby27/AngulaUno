import {Component, Inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule, FormsModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  imagenes = [
    { url: 'https://via.placeholder.com/150', descripcion: 'Paisaje 1' },
    { url: 'https://via.placeholder.com/150', descripcion: 'Paisaje 2' },
    { url: 'https://via.placeholder.com/150', descripcion: 'Paisaje 3' }
  ];
  filtro: string = '';

  imagenesFiltradas = [...this.imagenes];

  constructor(private dialog: MatDialog) {}

  filtrarImagenes() {
    this.imagenesFiltradas = this.imagenes.filter(imagen =>
      imagen.descripcion.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  abrirDialog(imagen: any) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: imagen
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró');
    });
  }

  agregarImagen() {
    const nuevaImagen = { url: 'https://via.placeholder.com/150', descripcion: 'Nueva Imagen' };
    this.imagenes.push(nuevaImagen);
    this.imagenesFiltradas = [...this.imagenes];
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  template: `
    <h1 mat-dialog-title>Imagen Ampliada</h1>
    <div mat-dialog-content>
      <img [src]="data.url" alt="{{ data.descripcion }}" class="imagen-ampliada">
      <p>{{ data.descripcion }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Cerrar</button>
    </div>
  `,
  standalone: true,
  styles: [`
    .imagen-ampliada {
      width: 100%;
      height: auto;
    }
  `]
})
export class DialogContentExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
