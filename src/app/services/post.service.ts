import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, first } from 'rxjs';
import { PostDetails } from '../interfaces/PostDetails';
import { Post } from '../interfaces/Post';
import { FormGroup } from '@angular/forms';
import { PublishPost } from '../interfaces/PublishPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  httpClient = inject(HttpClient);

  apiUrl = "http://localhost:8080/post";
  
  getAllPosts(size: number = 10, page: number = 0, sort: string = "desc"): Observable<PostDetails[]>{
    return this.httpClient.get<PostDetails[]>(`${this.apiUrl}?size=${size}&page=${page}&sort=publicationDate,${sort}`);
  }

  getPostById(id: number): Observable<Post>{
    return this.httpClient.get<Post>(`${this.apiUrl}/${id}`);
  }

  publishPost(post: PublishPost): Observable<PublishPost>{
    //console.log(post);
    return this.httpClient.post<PublishPost>(`${this.apiUrl}`, post);
  }

  getTotalNumberOfPosts() : Observable<number>{
    return this.httpClient.get<number>(`${this.apiUrl}/count`);
  }
}
