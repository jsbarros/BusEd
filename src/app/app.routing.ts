import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CadastroFaculdadeComponent } from './cadastro-faculdade/cadastro-faculdade.component';
import { CadastroRotaComponent } from './cadastro-rota/cadastro-rota.component';
import { CadastroOnibusComponent } from './cadastro-onibus/cadastro-onibus.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './login/login.component';
import { CadastroMotoristaComponent } from './cadastro-motorista/cadastro-motorista.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cadastroaluno', component: CadastroAlunoComponent, canActivate: [AuthGuard]},
    { path: 'cadastromotorista', component: CadastroMotoristaComponent, canActivate: [AuthGuard]},
    { path: 'cadastroonibus', component: CadastroOnibusComponent, canActivate: [AuthGuard]},
    { path: 'cadastrorota', component: CadastroRotaComponent, canActivate: [AuthGuard]},
    { path: 'cadastrofaculdade', component: CadastroFaculdadeComponent, canActivate: [AuthGuard]},
    { path: 'usuarios', component: ListaUsuariosComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'perfil', component: UserProfileComponent, canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
