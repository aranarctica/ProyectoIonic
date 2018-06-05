import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotasServicio } from '../../servicios/notas.servicio';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 //comentario

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  // Se pasa el array vacio y su id vacio para crear notas
nota = {id: null, titulo: null, descripcion: null};
id:null;

// constructor, llamamos al servicio y recibimos el id del array
  constructor(public navCtrl: NavController, public navParams: NavParams, public notasServicio: NotasServicio, private storage: Storage) {
    this.id = navParams.get('id');
    if(this.id != 0){
      this.nota = notasServicio.getNota(this.id);
    


    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
// esta funcion añade una nueva nota, si existe, la edita
  addNota(){
    if(this.id != 0){
      //editando
      this.notasServicio.editarNota(this.nota);
      alert('Nota Editada')
      //Date.now nos 
    }else{
  
      this.notasServicio.crearNota(this.nota);
      alert('Nota Creada')
      
    }
    this.navCtrl.pop();
  }
  //  esta funcio elimina una nota
  delNota(){
    this.notasServicio.delNota(this.nota);
    alert('Nota Eliminada');
    this.navCtrl.pop();
  }
 
}
