import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { IonApp } from "@ionic/angular/standalone";
import { ListaAlumnosComponent } from "./lista-alumnos/lista-alumnos.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, RouterOutlet, ListaAlumnosComponent],
})
export class AppComponent {
  constructor() {}
}
