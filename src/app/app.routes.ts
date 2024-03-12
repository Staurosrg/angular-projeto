import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
  { path: 'pessoas', component: PessoaComponent },
  { path: 'contatos', component: ContatoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
