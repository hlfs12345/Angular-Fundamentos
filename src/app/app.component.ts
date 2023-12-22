import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";
import { TemplateControlFlowComponent } from "./components/template/template-control-flow/template-control-flow.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <!-- <router-outlet></router-outlet> -->
  <h1>Angular - Fundamentos</h1>
  <!-- <div class="theme-dark">      -->
    <!-- <app-new-component/>    -->
    <!-- <app-template-binding/>  -->
    <!-- <app-template-variables/>  -->
    <app-template-control-flow>
  <!-- </div> -->
  
  `,
    imports: [CommonModule, RouterOutlet, NewComponentComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent]
})
export class AppComponent {}
