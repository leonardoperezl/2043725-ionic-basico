import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { CamaraComponent } from './camara/camara.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  { 
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'producto/:id',
    component: ProductoDetalleComponent
  },
  {
    path: '',
    redirectTo: '/camara',
    pathMatch: 'full',
  },
  {
    path: 'camara',
    component: CamaraComponent
  }
];
