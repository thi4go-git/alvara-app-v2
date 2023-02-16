import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficosRoutingModule } from './graficos-routing.module';
import { ExemploGraficoComponent } from './exemplo-grafico/exemplo-grafico.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ExemploGraficoComponent
  ],
  imports: [
    CommonModule,
    GraficosRoutingModule,
    MatIconModule

  ], exports: [
    ExemploGraficoComponent
  ]
})
export class GraficosModule { }
