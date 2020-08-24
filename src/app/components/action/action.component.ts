import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  @Input('timeTrackerOn') timeTrackerOn: boolean
  @Output() startClick: EventEmitter<any> = new EventEmitter()
  @Output() stopClick: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.startClick.emit()
  }

  stop() {
    this.stopClick.emit()
  }

}
