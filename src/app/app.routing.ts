import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { LoginComponent } from "./login/login.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { CadastroHortaComponent } from "./cadastro-horta/cadastro-horta.component";
import { Home2Component } from "./home2/home2.component";


export const ROUTES: Routes = [
    { path: '', component: Home2Component},
    { path: 'informacoes', component: HomeComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'login', component: LoginComponent},
    { path: 'perfil', component: PerfilComponent},
    { path: 'cadastroHorta', component: CadastroHortaComponent}
]
