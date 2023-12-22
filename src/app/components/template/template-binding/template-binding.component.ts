import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {

  //Test Interpolation
  public name = 'Lucas Fernandes';
  public age = 29;
  public condition = this.age > 1? " maior" : " menor";
  public sum(value1:number, value2 : number){
    return value1 +value2;
  };

  //Property Binding
  public isDisable = true;
  public srcValue = 'https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg?w=2000';

  // constructor(){
  //   setTimeout( () =>{
  //     this.name = "Nome Teste"
  //   }, 1000);
  // }

  //Attribute Binding
  //Only html


  //Class and Style Binding
  public isTextDecoration = this.age >= 30 ? '' : 'underline';

  //Event Binding
  public incIdade() {
    return this.age++;
  };

  public subIdade() {
    return this.age--;
  };

  public onKeyDown(event: Event){
    return console.log(event);
  };

  public onMouseMove(event : MouseEvent){
    return console.log({
      clieX: event.clientX,
      clieY: event.clientY,
    });
  };

  //Two-Way Binding
  //Only HTML

  //Diretivas de Atributos

}
