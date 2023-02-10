import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/componentes/layout/layout.component';
import { NotFoundComponent } from 'src/app/componentes/not-found/not-found.component';
import { AutenticacaoGuard } from 'src/app/guardiao/autenticacao.guard';
import { PreferenciasFormComponent } from './preferencias-form/preferencias-form.component';

const routes: Routes = [
  {
    path: 'preferencias', component: LayoutComponent,
    canActivate: [AutenticacaoGuard], children: [
      { path: 'form', component: PreferenciasFormComponent },
      { path: '', redirectTo: '/preferencias/form', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferenciasRoutingModule { }
