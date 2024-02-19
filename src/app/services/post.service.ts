import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDetails } from '../interfaces/PostDetails';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(private httpClient: HttpClient) {}

  apiUrl = "http://localhost:8080/post?size=10";

  getAllPosts(): Observable<PostDetails[]>{
    return this.httpClient.get<PostDetails[]>(this.apiUrl);
  }
}
