import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { ContatoComponent } from './contato/contato.component';
import { PessoaComponent } from './pessoa/pessoa.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [ContatoComponent,PessoaComponent],
})
export class AppServerModule {}
