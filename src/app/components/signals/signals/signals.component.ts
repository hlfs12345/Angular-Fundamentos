import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  public firstName = signal("Lucas");
  public lastName = signal("Fernandes");

  public fullName = computed( () => {
    return  this.firstName() +' '+ this.lastName();
  })

  public array = signal([1])

  /* 
    effect: raramente necessário sendo usado em circunstâcias específicas

    -Registro de dados sendo exibidos e quando eles mudam, seja para 
    análise ou como ferramenta de depuração
    
    -Manter os dados sincronizados com o window.localStorage

    -Adicionando comportamento DOM personalizado que não pode ser
    expresso com sintaxe de modelo

    -Executar renderização personalizada em um <canvas>, biblioteca
    de graficos ou outra biblioteca de UI de terceiros.
  */

  constructor(){
    effect(() => {
      console.log(this.firstName())
    })
  }

  public updateName(){
      return this.firstName.set("Bruna");
  }

  public updateArray(){
    this.firstName.update(()=> {
      return "João";
    })

    return this.array.update((oldValue: Array<number>)=>{
      console.log(oldValue);
      return [...oldValue, oldValue.length + 1]
    });

  }
}

