import { createReducer, on } from '@ngrx/store';
import { CounterState, initialState } from './counter.state';
import {
  decrement,
  increment,
  reset,
  toggleVisibility,
} from './counter.actions';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(toggleVisibility, (state) => {
    return {
      ...state,
      show: !state.show,
    };
  })
);

export function counterReducer(state: CounterState, action: any) {
  return _counterReducer(state, action);
}
