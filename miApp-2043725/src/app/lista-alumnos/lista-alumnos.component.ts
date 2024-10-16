import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList, IonItem, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, CommonModule],
})
export class ListaAlumnosComponent {
  alumnos: string[];

  constructor() { 
    this.alumnos = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"]
  }

  ngOnInit() {}

}
