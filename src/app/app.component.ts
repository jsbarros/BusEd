import { UsuarioService } from './services/usuario.service';
import { AuthService } from './core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public auth: AuthService, public usuario: UsuarioService) {}

  ngOnInit() { }
  
}
