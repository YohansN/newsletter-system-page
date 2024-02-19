import { Component, inject } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from '../../services/post.service';
import { PostDetails } from '../../interfaces/PostDetails';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule, MatIconModule, HttpClientModule, CommonModule, RouterModule],
  providers: [ ],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  
  postService = inject(PostService);

  posts:PostDetails[] = [];
  
  ngOnInit():void {
    this.postService.getAllPosts().subscribe((data) => (this.posts = data));
  }

}
