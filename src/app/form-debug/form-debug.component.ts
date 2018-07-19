import { Component, OnInit} from '@angular/core';
import { UsuarioService } from './../services/usuario.service';
import { Usuario } from '../models/Usuario'

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {

  usuarios: Usuario[];
  editState: boolean = false;
  usuarioToEdit: Usuario;


  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }

  deleteUsuario(event, usuario: Usuario){
    this.clearState();
    this.usuarioService.deleteUsuario(usuario);
  }

  editUsuario(event, usuario: Usuario){
    this.editState = true;
    this.usuarioToEdit = usuario;
  }

  updadeUsuario(usuario: Usuario){
    this.usuarioService.updateUsuario(usuario);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.usuarioToEdit = null;
  }
}
