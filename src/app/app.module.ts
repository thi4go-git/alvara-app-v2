import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from './modulos/template/template.module';
import { LayoutComponent } from './componentes/layout/layout.component';
import { AutenticacaoService } from './servicos/autenticacao.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './modulos/home/home.module';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { PreferenciasModule } from './modulos/preferencias/preferencias.module';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { AlvaraService } from './servicos/alvara.service';
import { AlvaraModule } from './modulos/alvara/alvara.module';
import { TokenInterceptor } from './interceptador/token.interceptor';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { LoginModule } from './modulos/login/login.module';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    TemplateModule,
    HomeModule,
    PreferenciasModule,
    UsuarioModule,
    AlvaraModule,
    LoginModule
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
