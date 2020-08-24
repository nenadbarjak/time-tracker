import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input('forComp') forComp: string
  @Input('timeTrackerOn') timeTrackerOn: boolean

  name: string
  day: string

  constructor() { }

  ngOnInit(): void {
    this.getUserName()
    this.day = moment().format('dddd')
  }

  condRender() {
    if ((this.forComp === 'dash') && !this.timeTrackerOn) {
      return `Welcome ${this.name}! Today is ${this.day}`
    } else if ((this.forComp === 'dash') && this.timeTrackerOn) {
      return "Hey, you've been hardworking!"
    } else {
      return "Hey, it's your daily report"
    }
  }

  getUserName() {   
    let user = JSON.parse(localStorage.getItem('user'))
    this.name = user.firstName
  }

}
