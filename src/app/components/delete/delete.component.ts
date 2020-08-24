import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { TimesService } from '../../services/times.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  id
  state
  time

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private store:Store,
    private timesService:TimesService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.store.subscribe(state => this.state = state)
    this.time = this.state.times.find(t => t._id === this.id)

  }

  deleteTime() {
    this.timesService.deleteTime(this.id).subscribe(data => {
      this.store.dispatch({type: 'REMOVE_TIME', payload: {id: this.id}})
      this.router.navigate(['/report'])
    },
    err => {
      console.log(err)
    })
  }

}
