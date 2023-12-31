import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";
import { TemplateControlFlowComponent } from "./components/template/template-control-flow/template-control-flow.component";
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from './components/signals/signals/signals.component';
import { PaiComponent } from './components/comunicacao-entre-components/pai/pai.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <!-- <router-outlet></router-outlet> -->
  <h1>Angular - Fundamentos</h1>
  <!-- <div class="theme-dark">      -->
    <!-- <app-new-component/> -->
    <!-- <app-template-binding/> -->
    <!-- <app-template-variables/> -->
    <!-- <app-template-control-flow> -->
    <!-- <app-template-deferrable-views> -->
    <!-- <app-signals/> -->
    <!-- <app-pai/> -->
    <!-- <app-angular-pipes/> -->
    <!-- <app-template-driven-forms/> -->
    <!-- <app-reactive-forms/> -->

    <!-- ng-content example 
      
    <app-content>
      <p text>Text</p>
      
      <footer class="footer">
        <p>Footer</p>
      </footer>

      <header id="header">
        <p>Header</p>
      </header>

    </app-content> -->

    <app-host-elements/>


  <!-- </div> -->
  
  `,
    imports: [CommonModule, 
              RouterOutlet,
              NewComponentComponent, 
              TemplateBindingComponent, 
              TemplateVariablesComponent, 
              TemplateControlFlowComponent,
              TemplateDeferrableViewsComponent,
              SignalsComponent,
              PaiComponent,
              AngularPipesComponent,
              ReactiveFormsComponent,
              TemplateDrivenFormsComponent,
              ContentComponent,
              HostElementsComponent
            ]
})
export class AppComponent {}
