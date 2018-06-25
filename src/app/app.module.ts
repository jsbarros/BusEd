import { AuthGuard } from './core/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/BusED';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { HomeComponent } from './home/home.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { CadastroMotoristaComponent } from './cadastro-motorista/cadastro-motorista.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { UserProfileComponent } from './user-profile/user-profile.component';



// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyD427e4Zxv-l0WzD3PX_hGSadwWKQKopYM",
  authDomain: "bused-app.firebaseapp.com",
  databaseURL: "https://bused-app.firebaseio.com",
  projectId: "bused-app",
  storageBucket: "bused-app.appspot.com",
  messagingSenderId: "629399593210"
};

@NgModule({
  declarations: [
    AppComponent,
    FormDebugComponent,
    HomeComponent,
    CadastroAlunoComponent,
    CadastroMotoristaComponent,
    LoginComponent,
    UserProfileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule,                           // And this
    CoreModule,
    routing
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
