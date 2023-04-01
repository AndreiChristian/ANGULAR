import { Post } from '../../models/posts.model';

export interface PostState {
  posts: Post[];
}

export const initialState: PostState = {
  posts: [
    { id: '1', title: 'Post 1', description: 'sample post 1' },
    { id: '2', title: 'Post 2', description: 'sample post 2' },
  ],
};
