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
  //constructor(private httpClient: HttpClient) {}

  apiUrl = "http://localhost:8080/post";
  
  getAllPosts(): Observable<PostDetails[]>{
    return this.httpClient.get<PostDetails[]>(`${this.apiUrl}`);
  }

  getPostById(id: number): Observable<Post>{
    return this.httpClient.get<Post>(`${this.apiUrl}/${id}`);
  }

  publishPost(post: PublishPost): Observable<PublishPost>{
    //console.log(post);
    return this.httpClient.post<PublishPost>(`${this.apiUrl}`, post);
  }
}
