import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { AlvaraRoutingModule } from './alvara-routing.module';
import { AlvaraFormComponent } from './alvara-form/alvara-form.component';
import { AlvaraListaComponent } from './alvara-lista/alvara-lista.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


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
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule

  ], exports: [
    AlvaraFormComponent,
    AlvaraListaComponent
  ]
})
export class AlvaraModule { }
