import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';


export interface Foto {
  filepath: string; 
  webViewPath?: string;
}


@Injectable({
  providedIn: 'root'
})
export class FotoServiceService {
  public fotos: Foto[] = [];

  constructor() { }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.fotos.unshift({
      filepath: "",
      webViewPath: capturedPhoto.webPath
    })
  }
}
