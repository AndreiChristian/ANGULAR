import { createReducer, on } from '@ngrx/store';
import { CounterState, initialState } from './counter.state';
import {
  customIncrement,
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
  }),
  on(customIncrement, (state, action) => {
    console.table(action);
    return {
      ...state,
      counter: state.counter + action.value,
    };
  })
);

export function counterReducer(state: CounterState, action: any) {
  return _counterReducer(state, action);
}
