import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContatoComponent } from './contato.component';



@NgModule({
	declarations: [
		ContatoComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule
	]
})
export class ContatoModule { }

