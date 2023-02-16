import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/componentes/layout/layout.component';
import { NotFoundComponent } from 'src/app/componentes/not-found/not-found.component';
import { AutenticacaoGuard } from 'src/app/guardiao/autenticacao.guard';
import { AlvaraFormComponent } from './alvara-form/alvara-form.component';
import { AlvaraListaFilterComponent } from './alvara-lista-filter/alvara-lista-filter.component';
import { AlvaraListaComponent } from './alvara-lista/alvara-lista.component';

const routes: Routes = [
  {
    path: 'alvara', component: LayoutComponent, canActivate: [AutenticacaoGuard], children: [
      { path: 'lista', component: AlvaraListaComponent },
      { path: 'lista/filter', component: AlvaraListaFilterComponent },
      { path: 'form', component: AlvaraFormComponent },
      { path: 'form/:id', component: AlvaraFormComponent },
      { path: 'lista/:tipoConsulta', component: AlvaraListaComponent },
      { path: '', redirectTo: '/alvara/lista', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlvaraRoutingModule { }
