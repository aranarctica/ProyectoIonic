  import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Marker } from '@agm/core/services/google-maps-types';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';


/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

constructor(public navCtrl: NavController, public geolocation: Geolocation){

}


// esta funcion localiza el dispositivo mediantes su localizacion
  geolocalizacion(){

    this.geolocation.getCurrentPosition().then((geoposition : Geoposition) =>{
      console.log(geoposition);
    })

  }
// esta funcion sirve para enseñar en pantalla la localizacion
  ngAfterViewInit(){
    this.geolocalizacion();
    
    }
// aqui indicamos por defecto donde aparecera el mapa
  latitud: number = 43.2918111 ;
  longitud: number = -1.9885133;
  localizador = false;
// la funcion event sirve para seleccionar un lugar en el mapa y colocar la chincheta roja
  seleccionar(event){
    this.latitud = event.coords.lat;
    this.longitud = event.coords.lng;
    this.localizador = true;
  }

}