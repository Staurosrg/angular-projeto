import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContatoComponent } from './contato/contato.component';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private baseUrl = 'http://localhost:3000/contatos'; // atualize com a URL da sua API

  constructor(private http: HttpClient) { }

  // outros métodos aqui...

  createContato(contato: ContatoComponent) {
    return this.http.post(this.baseUrl, contato);
  }
}
