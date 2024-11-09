import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: true,
  imports: [CommonModule]
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
