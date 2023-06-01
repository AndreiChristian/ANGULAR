export interface CounterState {
  counter: number;
  show: boolean;
}

export const initialState: CounterState = {
  counter: 0,
  show: true,
};
