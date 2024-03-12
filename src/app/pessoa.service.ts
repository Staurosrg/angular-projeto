import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PessoaComponent } from './pessoa/pessoa.component';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private baseUrl = 'http://localhost:3000/pessoas';

  constructor(private http: HttpClient) { }

  getPessoa(id: number) {
    return this.http.get<PessoaComponent>(`${this.baseUrl}/${id}`);
  }

  getPessoas() {
    return this.http.get<PessoaComponent[]>(this.baseUrl);
  }

  createPessoa(pessoa: PessoaComponent) {
    return this.http.post(this.baseUrl, pessoa);
  }

  // updatePessoa(pessoa: PessoaComponent) {
  //   return this.http.put(`${this.baseUrl}/${pessoa.id}`, pessoa);
  // }

  deletePessoa(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
