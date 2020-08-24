import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import * as moment from 'moment'
import { formatTimes } from '../../actions/formatTimes'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  state
  message: string
  sum: number = 0
  sessionTime
  date

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.subscribe(state => this.state = state)

    let times = formatTimes(this.state.times)

    if (times.length) {
      if (times[0].day === moment().startOf('day').valueOf()) {
        this.message = "Today's session"
      } else {
        this.message = "Last session was"
      }
      
      times.length &&   times[0].times.forEach(time => {
        this.sum += time.endTime - time.startTime
      });
      this.sessionTime = moment(this.sum).utc().format("HH[h] mm[m] ss[s]")
      this.date = moment(times[0].day).format('Do MMMM')
    } else {
      this.message = "Your daily report is empty."
    }

  }

}
