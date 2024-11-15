import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    CommonModule, ReactiveFormsModule,],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {
  contactos: any[] = [];
  displayedColumns: string[] = ['nombre', 'telefono', 'email', 'acciones'];
  dataSource = new MatTableDataSource(this.contactos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  contactoForm: FormGroup;
  editIndex: number | null = null;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  agregarContacto() {
    if (this.contactoForm.valid) {
      if (this.editIndex !== null) {
        this.contactos[this.editIndex] = this.contactoForm.value;
        this.editIndex = null;
      } else {
        this.contactos.push(this.contactoForm.value);
      }
      this.dataSource.data = this.contactos;
      this.contactoForm.reset();
    }
  }

  editarContacto(index: number) {
    this.editIndex = index;
    const contacto = this.contactos[index];
    this.contactoForm.setValue(contacto);
  }

  eliminarContacto(index: number) {
    const dialogRef = this.dialog.open(ConfirmacionDialog);

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.contactos.splice(index, 1);
        this.dataSource.data = this.contactos;
      }
    });
  }
}

@Component({
  selector: 'confirmacion-dialog',
  template: `
    <h2 mat-dialog-title>Confirmación</h2>
    <mat-dialog-content>¿Estás seguro de que deseas eliminar este contacto?</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-button mat-dialog-close [mat-dialog-close]="true">Eliminar</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class ConfirmacionDialog {}

