import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {
  pessoaForm: FormGroup;

  //constructor(private pessoaService: PessoaService) {}
  constructor(private fb: FormBuilder, private pessoaService: PessoaService) {

    this.pessoaForm = this.fb.group({
      id: [''],
      nome: [''],
      cpf: [''],
      dataNascimento: ['']
    });
  }

  onSubmit(): void {
    this.pessoaService.createPessoa(this.pessoaForm.value).subscribe();
  }
}