import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directives',
  templateUrl: './ng-directives.component.html',
  styleUrls: ['./ng-directives.component.css']
})
export class NgDirectivesComponent implements OnInit {

  jediList: string[] = ["Luke Skywalker","Obi Wan Kenobi","Yoda", "Mace Windu"];
  yourJedi: string;
  viewSecretText: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
