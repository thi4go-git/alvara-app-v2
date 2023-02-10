import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from './modulos/template/template.module';
import { LayoutComponent } from './componentes/layout/layout.component';
import { LoginComponent } from './componentes/login/login.component';
import { AutenticacaoService } from './servicos/autenticacao.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './modulos/home/home.module';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { PreferenciasModule } from './modulos/preferencias/preferencias.module';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { AlvaraService } from './servicos/alvara.service';
import { AlvaraModule } from './modulos/alvara/alvara.module';
import { TokenInterceptor } from './interceptador/token.interceptor';
import { ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TemplateModule,
    HomeModule,
    PreferenciasModule,
    UsuarioModule,
    AlvaraModule,
    ReactiveFormsModule

  ],
  providers: [
    AutenticacaoService,
    AlvaraService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
