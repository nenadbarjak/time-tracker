import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { Store } from '@ngrx/store'
import { TimesService } from '../../services/times.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  startTime = 0
  endTime: number
  currentTime = 0
  timeElapsed = moment.utc(this.currentTime - this.startTime).valueOf()
  hrs = moment.utc(this.timeElapsed).format("HH")
  min = moment.utc(this.timeElapsed).format("mm")
  sec = moment.utc(this.timeElapsed).format("ss")
  timeTrackerOn = false

  constructor(
    private timesService: TimesService,
    private store: Store
  ) { }

  ngOnInit(): void {  }

  startClock: any

  startTimer() {
    this.timeTrackerOn = true

    this.startTime = moment().utc().valueOf()

    this.startClock = setInterval(() => {
      this.currentTime = moment().utc().valueOf()
      this.timeElapsed = moment.utc(this.currentTime - this.startTime).valueOf()
      this.hrs = moment.utc(this.timeElapsed).format("HH")
      this.min = moment.utc(this.timeElapsed).format("mm")
      this.sec = moment.utc(this.timeElapsed).format("ss")
    }, 1000)
  }

  stopTimer() {
    this.timeTrackerOn = false

    clearInterval(this.startClock)
    this.endTime = this.currentTime

    this.timesService.addTime({
      startTime: this.startTime,
      endTime: this.endTime
    }).subscribe(data => {
      this.store.dispatch({type: 'ADD_TIME', payload: {time: data}})
    },
    err => {
      console.log(err)
    })
  }
  
}
