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
import {MatInputModule} from '@angular/material/input';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule, MatIconModule, 
    HttpClientModule, CommonModule, RouterModule, MatInputModule, MatPaginatorModule],
  providers: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  
  postService = inject(PostService);

  posts:PostDetails[] = [];


  ngOnInit():void {
    this.postService.getAllPosts(this.pageSize, this.pageIndex).subscribe((data) => (this.posts = data));
    this.postService.getTotalNumberOfPosts().subscribe((data) => (this.length = data));
  }

  //Configurações de paginação
  length = 0; //Valor vem da api  
  pageSize = 10;
  pageIndex = 0;


  pageEvent: PageEvent = new PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.postService.getAllPosts(this.pageSize, this.pageIndex).subscribe((data) => (this.posts = data));
  }

}
