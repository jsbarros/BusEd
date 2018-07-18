import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

interface Usuarios {
  nome: string;
  email: string;
  cep: number;
  numero: number;
  complemento: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  tipo: string;
}

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  usuariosCol: AngularFirestoreCollection<Usuarios>;
  usuarios: Observable<Usuarios[]>;


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.usuariosCol = this.afs.collection('usuarios');
    this.usuarios = this.usuariosCol.valueChanges();
  }

}
