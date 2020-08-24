import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { formatTimes } from '../../actions/formatTimes'

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  state
  times

  constructor(
    private store:Store
    ) { }

  ngOnInit(): void {
    this.store.subscribe(state => this.state = state)

    this.times = formatTimes(this.state.times)
  }

}
