import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {

  public listComidas = signal<Array<{id:number, comida:string, preco:string}>>([
    {
      id: 1,
      comida:"X-Salada",
      preco: "R$ 10,50",
    },
    {
      id: 2,
      comida:"X-Bacon",
      preco: "R$ 12,50",
    },
    {
      id: 3,
      comida:"Coxinha",
      preco: "R$ 6,50",
    },
  ]);

  public submitForm(form : NgForm){
    console.log(form.valid);
    if(form.valid){
      console.log(form.value);
    }
  }

}
