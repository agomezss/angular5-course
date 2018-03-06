import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseModule } from './course/course.module';
import { SwapiService } from './services/swapi.service';
import { AppRouting } from './app.routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CourseModule,
    HttpModule,
    RouterModule
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
