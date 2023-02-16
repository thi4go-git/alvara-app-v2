import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

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
import { DateFormatPipe } from './pipes/date-format.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GraficosModule } from './modulos/graficos/graficos.module';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    NotFoundComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    TemplateModule,
    HomeModule,
    PreferenciasModule,
    UsuarioModule,
    AlvaraModule,
    GraficosModule,
    MatIconModule,
    CommonModule,
    MatInputModule


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
