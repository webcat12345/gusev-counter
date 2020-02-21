import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CounterStore from '../../../reducers/counter.reducer';
import { changeCounter } from '../../../actions/counter.actions';

@Component({
  selector: 'app-counter-slot',
  templateUrl: './counter-slot.component.html',
  styleUrls: ['./counter-slot.component.scss']
})
export class CounterSlotComponent implements OnInit {

  constructor(
    private store: Store<CounterStore.State>
  ) { }

  ngOnInit(): void {
  }

  start() {
    this.store.dispatch(changeCounter());
  }

}
