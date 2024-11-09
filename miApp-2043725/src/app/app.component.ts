import { Component } from '@angular/core';

import { ProductosComponent } from './productos/productos.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [ProductosComponent],
})
export class AppComponent {
  constructor() {}
}
