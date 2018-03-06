import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-external-block',
  templateUrl: './external-block.component.html',
  styleUrls: ['./external-block.component.css']
})
export class ExternalBlockComponent implements OnInit {

  @Input() receivedValue: any;
  @Output() onReceive = new EventEmitter<string>();
  inputValue: string;

  constructor() { }

  ngOnInit() {
  }

  sendValue()
  {
      this.onReceive.emit(this.inputValue);
  }

}
