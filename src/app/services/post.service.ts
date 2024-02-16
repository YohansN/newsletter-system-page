import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(private httpClient: HttpClient) {}

  apiUrl = "http://localhost:8080/post?size=10";

  getAllPosts(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.apiUrl);
  }
}
