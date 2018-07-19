import { Usuario } from './../models/Usuario';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsuarioService {
  usuariosCol: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;
  usuarioDoc: AngularFirestoreDocument<Usuario>;

  constructor(public afs: AngularFirestore) { 
    this.usuariosCol = this.afs.collection('usuarios', ref => ref.orderBy('nome'));

    this.usuarios = this.usuariosCol.snapshotChanges().pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Usuario;
        data.id = a.payload.doc.id;
        return data;
      })))
  }

  getUsuarios(){
    return this.usuarios;
  }

  addUsuario(usuario: Usuario){
    this.usuariosCol.add(usuario);
  }

  deleteUsuario(usuario: Usuario){
    this.usuarioDoc = this.afs.doc(`usuarios/${usuario.id}`);
    this.usuarioDoc.delete();
  }

  updateUsuario(usuario: Usuario){
    this.usuarioDoc = this.afs.doc(`usuarios/${usuario.id}`);
    this.usuarioDoc.update(usuario);
  }

}