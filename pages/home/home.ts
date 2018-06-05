import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotasServicio } from '../../servicios/notas.servicio';
import { DetallePage } from '../detalle/detalle';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Creamos la lista de las notas    
  notas = [];
  @ViewChild('myNav') nav: NavController
  
  constructor(public navCtrl: NavController, public notasServicio: NotasServicio, private storage: Storage) {

    // recogemos las notas del array
    this.notas = notasServicio.getNotas();
    

  }
// Pasamos a la pagina detalles
  public goToDetail(id){
    this.navCtrl.push(DetallePage, {id:id});
  }
  // al darle al boton de crear te manda a detalle page"
  public crearNota(){
    this.navCtrl.push(DetallePage, {id:0});
  }

}
