// Se importa Injectable para poder injectarlo en cualquier otro componente 
import { Injectable }  from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class NotasServicio{
//Introduccion de valores a titulo y descripcion
    notas = [
        {id:1, titulo: "Nota 1", descripcion:" Texto de la nota 1"},
        {id:2, titulo: "Nota 2", descripcion:" Texto de la nota 2"},
        {id:3, titulo: "Nota 3", descripcion:" Texto de la nota 3"},
      ];

// regresamos las notas
      public getNotas(){
          return this.notas;
      }
  
// Recibe el id de la nota y FILTER  que busca y en el array y regresa el objeto deseado(elemento e es cada uno de los objetos del array)
      public getNota(id){
          return this.notas.filter(function(e, i){return e.id == id})[0] || {id:null, titulo:null, descripcion:null};
      }

      // metodo para agregar notas
      public crearNota(nota){
          this.notas.push(nota);
      }
      //recorre el array y compara si la nota existe
      public editarNota(nota){
          for(let i = 0; i <this.notas.length; i++){
              if(this.notas[i].id == nota){
                this.notas[i] = nota;
              }
          }
      }
      //Splice nos permite elegir el elemento a eliminar

      public delNota(nota){
        for(let i = 0; i <this.notas.length; i++){
            if(this.notas[i].id == nota.id){
              this.notas.splice(i, 1);
            }
        }
    }
      }
