import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  clickCount: number = 0;
  constructor() { }

  ngOnInit() {
  }

  addClick() {
    this.clickCount++;
  }
}
