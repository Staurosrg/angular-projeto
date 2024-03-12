import { NgModule } from '@angular/core';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { ContatoModule } from './contato/contato.module';
import { PessoaModule } from './pessoa/pessoa.module';


@NgModule({
  // declarations: [
  //   ContatoComponent,
  //   PessoaComponent,
  // ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ContatoModule,
    PessoaModule
  ],
  providers: [
    provideClientHydration()
  ],
  // bootstrap: [AppComponent]
})
export class AppModule { }
