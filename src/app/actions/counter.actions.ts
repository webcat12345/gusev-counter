import { createAction, props } from '@ngrx/store';

export const changeCounter = createAction(
  '[Counter] Change',
);

export const increaseCounter = createAction(
  '[Counter] Increase',
);

export const decreaseCounter = createAction(
  '[Counter] Increase',
);

export const startCounter = createAction(
  '[Counter] Start'
);

export const endCounter = createAction(
  '[Counter] End'
);
