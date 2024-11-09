import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList, IonItem, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonActionSheet, IonButton, ActionSheetController } from "@ionic/angular/standalone";

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
  standalone: true,
  imports: [IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonItem, IonList, CommonModule],
})
export class ListaAlumnosComponent {
  alumnos: string[];

  constructor(private actionSheetCtrl: ActionSheetController) { 
    this.alumnos = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"]
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Opciones",
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ]
    })

    await actionSheet.present();
  }

  // ngOnInit() {}
}
