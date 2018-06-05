import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-camara',
  templateUrl: 'camara.html',
})
export class CamaraPage {
// aqui se guarda la foto que sacamos
foto: string = ' ';

  constructor(private camera: Camera, private storage: Storage) {
  }

  
// esta funcion sirve para sacar las fotos, es una funcion nativa del modulo y sirve para dar una serie de opciones para la camara
tomarFoto(){
   this.foto= '';
   
   const opciones: CameraOptions = {
     quality: 100,
     destinationType: this.camera.DestinationType.DATA_URL,
     encodingType: this.camera.EncodingType.JPEG,
     mediaType: this.camera.MediaType.PICTURE,
     allowEdit: true,
     targetWidth: 100,
     targetHeight: 100
   }
// esta es una funcion interna del modulo dela camara
   this.camera.getPicture(opciones)
   .then((ImageData) => {
let base64image = 'data:image/jpeg;base64,' + ImageData;
this.foto = base64image;
   },(error) =>{
     console.error(error);
   })
   .catch((error) =>{
    console.error(error);
   })
 }

}
