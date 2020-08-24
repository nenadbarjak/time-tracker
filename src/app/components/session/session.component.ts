import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  @Input() session
  day
  times
  sum: number = 0
  total: string

  constructor() { }

  ngOnInit(): void {
    this.day = moment(this.session.day).calendar(null, {
      sameDay: '[Today] Do MMMM',
      nextDay: '[Tomorrow]',
      nextWeek: 'Do MMMM',
      lastDay: '[Yesterday] Do MMMM',
      lastWeek: 'Do MMMM',
      sameElse: 'Do MMMM'
    })

    this.times = this.session.times
    this.times.forEach(time => {
      this.sum += time.endTime - time.startTime
    });

    this.total = moment(this.sum).utc().format("HH[h] mm[m] ss[s]")
  }

  formatTime(timestamp) {
    return moment(timestamp).format("HH:mm:ss")
  }

  formatTimeDifference(timestamp) {
    return moment(timestamp).utc().format("HH:mm:ss")
  }

}
