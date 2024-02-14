import { Component, inject } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule, MatIconModule, HttpClientModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  title: string = "Título do nosso post!";
  synopsis: string = "Sinopse do texto";
  author: string = "Autor";
  releaseDate: string = "01/10/2002";

//Passar tudo isso abaixo pra Service:
  posts: any = [];
  httpClient = inject(HttpClient);
  url = "http://localhost:8080/post";
  
  ngOnInit():void {
    this.getAllPosts();
    //this.post = postService.data;
  }

  getAllPosts(): any{
    this.httpClient.get(this.url).subscribe((data: any) => {
      console.log(data);
      this.posts = data;
    });
  }
  
  
  /*constructor(postService : PostService) {
    this.posts = postService.getAllPosts();
  }*/
}
