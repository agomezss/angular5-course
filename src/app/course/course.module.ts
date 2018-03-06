import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateBindingComponent } from './template-binding/template-binding.component';
import { NgDirectivesComponent } from './ng-directives/ng-directives.component';
import { EventComponent } from './event/event.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ServiceComponent } from './service/service.component';
import { ExternalBlockComponent } from './input-output/external-block/external-block.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations:
   [TemplateBindingComponent, NgDirectivesComponent, EventComponent, InputOutputComponent, ServiceComponent, ExternalBlockComponent, HomeComponent],
  exports: [TemplateBindingComponent, NgDirectivesComponent, EventComponent, InputOutputComponent, ServiceComponent, ExternalBlockComponent]
  
})
export class CourseModule { }
