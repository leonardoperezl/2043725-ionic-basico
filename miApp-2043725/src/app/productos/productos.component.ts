import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardTitle, IonCardContent, IonContent, IonItem, IonLabel, IonCardHeader } from "@ionic/angular/standalone";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: true,
  imports: [IonCardHeader, IonLabel, IonItem, IonContent, IonCardContent, IonCardTitle, IonCard, CommonModule, RouterModule]
})
export class ProductosComponent  implements OnInit {
  productos: any[] = [];

  constructor(private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.consultaService.getProductos().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error("Error al cargar productos: ", error)
      }
    );
  }
}
