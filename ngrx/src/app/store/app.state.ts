import { counterReducer } from '../counter/store/counter.reducer';
import { CounterState } from '../counter/store/counter.state';
import { postsReducer } from '../posts/state/posts.reducer';
import { PostState } from '../posts/state/posts.state';

export interface AppState {
  counter: CounterState;
  posts: PostState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer,
};
