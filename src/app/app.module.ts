import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routing'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroHortaComponent } from './cadastro-horta/cadastro-horta.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './cadastro/cadastroUser.service';
import { FormsModule }   from '@angular/forms';
import { HortaService } from './cadastro-horta/cadastroHorta.service';
import { Home2Component } from './home2/home2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    PerfilComponent,
    CadastroHortaComponent,
    Home2Component
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    UsuarioService,
    HortaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
