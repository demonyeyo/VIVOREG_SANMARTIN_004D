import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Usuario{
  nombre: string;
  fecha: string;
  correo: string;
  password: string;
  profesor: boolean;
}

const USERS_KEY ='my-usuarios';


@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {

  private _storage : Storage;
  
  constructor(private storage: Storage) { 
    this.init();
  }

  //creamos el almacen de key,value
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;  
  }

  //crear un nuevo usuario en el storage
  async addUsuario(dato: Usuario):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos: Usuario[])=>{
      if (datos){
          datos.push(dato);
          return this.storage.set(USERS_KEY, datos);
      }
      else{
        return this.storage.set(USERS_KEY, [dato]);
      }
     })
  }//fin del método add

  //obtener los usuarios del storage
  async getUsuarios(){
    return this.storage.get(USERS_KEY);
  }

  async setNombre(nombre: string){
    return this.storage.set('logeado', nombre);
  }

  async getNombre() {
    return this.storage.get('logeado');
  }

}
