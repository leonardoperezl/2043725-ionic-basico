import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonInput, IonList, IonCheckbox, IonItem, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonIcon } from "@ionic/angular/standalone";

import { Alumno } from '../alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone: true,
  imports: [IonIcon, IonCol, IonRow, IonGrid, IonContent, IonTitle, IonToolbar, IonHeader, FormsModule, ReactiveFormsModule, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonItem, IonList, CommonModule, IonButton, IonCheckbox, IonInput]
})
export class ListaAlumnosComponent {
  alumnos: Alumno[] = [];
  nuevoAlumno: Alumno = { nombre: "", presente: false }

  constructor() {}

  agregarAlumno(): void {
    this.alumnos.push({ ...this.nuevoAlumno  });
    this.nuevoAlumno = {
      nombre: "",
      presente: false
    };
  }

  ngOnInit() {}
}
