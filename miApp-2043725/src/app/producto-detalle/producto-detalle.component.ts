import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
  standalone: true,
  imports: [IonContent, IonLabel, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, CommonModule]
})
export class ProductoDetalleComponent  implements OnInit {
  producto: any;

  constructor(
    private consulta: ConsultaService, 
    private ruta : ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idProducto = Number(this.ruta.snapshot.paramMap.get('id'));
    this.consulta.getProducto(idProducto).subscribe(
      (data) => {
        this.producto = data;
      },
      (error) => {
        console.error("Error al cargar los detalles del producto:", error);
      }
    )
  }

}
