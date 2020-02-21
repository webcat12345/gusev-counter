import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
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

  constructor(private actions$: Actions) {}

}
