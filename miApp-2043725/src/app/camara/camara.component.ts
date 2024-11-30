import { Component } from '@angular/core';
import { IonContent, IonIcon, IonFab, IonFabButton, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";
import { FotoServiceService } from '../foto-service.service';
import { Foto } from '../foto-service.service'

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonFabButton, IonFab, IonIcon, IonContent],
})
export class CamaraComponent {
  public fotos: Foto[] = this.fotoService.fotos;
  
  constructor(private fotoService: FotoServiceService) { }

  async tomarFoto() {
    await this.fotoService.addNewToGallery();
  }
}
