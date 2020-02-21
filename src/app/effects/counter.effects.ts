import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mapTo, switchMap, takeUntil } from 'rxjs/operators';
import { timer } from 'rxjs';
import * as CounterActions from '../actions/counter.actions';

@Injectable()
export class CounterEffects {

  changeCounter$ = createEffect(() => this.actions$.pipe(
    ofType(CounterActions.changeCounter.type),
    switchMap(() => [
      CounterActions.increaseCounter(),
      CounterActions.decreaseCounter()
    ])
  ));

  startCounter$ = createEffect(() => this.actions$.pipe(
    ofType(CounterActions.startCounter.type),
    switchMap(() =>
      timer(0, 1000).pipe(
        takeUntil(this.actions$.pipe(ofType(CounterActions.stopCounter.type))),
        mapTo(CounterActions.changeCounter())
      )
    ))
  );

  constructor(private actions$: Actions) {
  }

}
