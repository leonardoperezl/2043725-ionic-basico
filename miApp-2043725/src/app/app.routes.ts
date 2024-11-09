import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

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
    redirectTo: '/productos',
    pathMatch: 'full',
  },
];
