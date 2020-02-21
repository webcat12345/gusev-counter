import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from '../actions/counter.actions';

export const counterFeatureKey = 'counter';

export interface State {
  countA: number;
  countB: number;
}

export const initialState: State = {
  countA: -5,
  countB: 10
};

const counterReducer = createReducer(
  initialState,
  on(CounterActions.increaseCounter, state => ({ ...state, countA: state.countA + 1 })),
  on(CounterActions.decreaseCounter, state => ({ ...state, countA: state.countB - 1 })),
);

export function reducer(state: State | undefined, action: Action) {
  return counterReducer(state, action);
}
