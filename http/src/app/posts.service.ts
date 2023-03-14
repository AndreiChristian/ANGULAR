import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { Post } from './post.model';

const firebaseLink: string =
  'https://angular-first-http-default-rtdb.europe-west1.firebasedatabase.app/posts.json';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {
      title,
      content,
    };

    this.http.post<{ name: string }>(firebaseLink, postData).subscribe(
      (responseData) => {
        console.log(responseData);
      },
      (error) => {
        this.error.next(error.message);
      }
    );
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>(firebaseLink).pipe(
      map((responseData) => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      })
    );
  }

  deletePosts() {
    return this.http.delete(firebaseLink);
  }
}
