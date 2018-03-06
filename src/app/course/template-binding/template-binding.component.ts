import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  templateUrl: './template-binding.component.html',
  styleUrls: ['./template-binding.component.css']
})
export class TemplateBindingComponent implements OnInit {

  Jedi: string = "Luke Skywalker!";

  constructor() { }

  ngOnInit() {
  }

  getTheLastJedi(): string{
    return this.Jedi;
  }

}
