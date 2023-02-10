import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlvaraRoutingModule } from './alvara-routing.module';
import { AlvaraFormComponent } from './alvara-form/alvara-form.component';
import { AlvaraListaComponent } from './alvara-lista/alvara-lista.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AlvaraFormComponent,
    AlvaraListaComponent
  ],
  imports: [
    CommonModule,
    AlvaraRoutingModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule

  ], exports: [
    AlvaraFormComponent,
    AlvaraListaComponent
  ]
})
export class AlvaraModule { }
