import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from 'src/app/autenticacao.guard';
import { LayoutComponent } from 'src/app/componentes/layout/layout.component';
import { NotFoundComponent } from 'src/app/componentes/not-found/not-found.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path: 'home', component: LayoutComponent, canActivate: [AutenticacaoGuard], children: [
      { path: 'inicio', component: InicioComponent },
      { path: '', redirectTo: '/home/inicio', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
