import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PessoaComponent } from './pessoa.component';


@NgModule({
	declarations: [
		PessoaComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule
	]
})
export class PessoaModule { }
