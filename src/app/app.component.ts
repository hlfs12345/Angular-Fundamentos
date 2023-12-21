import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NewComponentComponent, TemplateBindingComponent],
  template: `
  <!-- <router-outlet></router-outlet> -->
  <h1>Angular - Fundamentos</h1>
  <!-- <div class="theme-dark">      -->
    <app-new-component/>   
    <app-template-binding/> 
  <!-- </div> -->
  
  `,
})
export class AppComponent {}
