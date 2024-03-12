import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContatoService } from '../contato.service';

@Component({
	selector: 'app-contato',
	templateUrl: './contato.component.html',
	styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
	contatoForm: FormGroup;

	constructor(private fb: FormBuilder, private contatoService: ContatoService) {
		this.contatoForm = this.fb.group({
			id: [''],
			nome: [''],
			telefone: [''],
			email: ['']
		});
	}

	onSubmit(): void {
		this.contatoService.createContato(this.contatoForm.value).subscribe();
	}
}
