import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TemplateBindingComponent } from './course/template-binding/template-binding.component';
import { NgDirectivesComponent } from './course/ng-directives/ng-directives.component';
import { InputOutputComponent } from './course/input-output/input-output.component';
import { HomeComponent } from './course/home/home.component';
import { EventComponent } from './course/event/event.component';
import { ServiceComponent } from './course/service/service.component';

const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',        
        pathMatch: 'full'
    },
    {
        path:'home',
        component: HomeComponent
    },  
    {
        path:'binding',
        component:TemplateBindingComponent
    },    
    {
        path:'directives',
        component:NgDirectivesComponent
    },    
    {
        path:'input-output',
        component:InputOutputComponent
    },    
    {
        path:'event',
        component:EventComponent
    },    
    {
        path:'service',
        component:ServiceComponent
    }
];

export const AppRouting = RouterModule.forRoot(AppRoutes);
