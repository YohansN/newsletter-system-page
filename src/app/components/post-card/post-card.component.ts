import { Component, inject } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule, MatIconModule, HttpClientModule],
  providers: [ PostService ],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  title: string = "Título do nosso post!";
  synopsis: string = "Sinopse do texto";
  author: string = "Autor";
  releaseDate: string = "01/10/2002";
  
  constructor(private postService: PostService) {}
  posts: any = [];
  
  ngOnInit():void {
    this.postService.getAllPosts().subscribe((data) => (this.posts = data));
  }

}
