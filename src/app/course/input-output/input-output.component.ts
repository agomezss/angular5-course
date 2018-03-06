import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  sendValue: any;
  receivedValue: any;

  constructor() { }

  ngOnInit() {
  }

  receive(value:string)
  {
    this.receivedValue = value;
  }

}
