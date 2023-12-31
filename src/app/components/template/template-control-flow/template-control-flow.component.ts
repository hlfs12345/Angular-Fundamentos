import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {

    //IF
    public isTrue = false;

    //FOR
    public loadingData$: Observable<string[]> = of([
      'item 1',
      'item 2',
      'item 3',
    ]).pipe(delay(3000));

    public trackByFn(index: number){
      return index;
    }

    //FOR Pt 2
    // public itens = [{ name : 'Lucas Fernandes'}];

    public addNewName(value : string){
      return this.itens.push({ name: value});
    }

    //FOR Pt 3
    public itens: Array<{ name : string}> = [];  


    //IF, FOR, SWITCH CASE
    public switchCondition = 'C';    

  }