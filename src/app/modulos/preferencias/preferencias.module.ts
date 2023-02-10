import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferenciasRoutingModule } from './preferencias-routing.module';
import { PreferenciasFormComponent } from './preferencias-form/preferencias-form.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    PreferenciasFormComponent
  ],
  imports: [
    CommonModule,
    PreferenciasRoutingModule,
    MatSnackBarModule
  ], exports: [
    PreferenciasFormComponent
  ]
})
export class PreferenciasModule { }
