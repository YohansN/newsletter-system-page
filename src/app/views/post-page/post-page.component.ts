import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/Post';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [MatDividerModule, CommonModule],
  providers: [],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss'
})
export class PostPageComponent {
  
  private postService = inject(PostService);
  constructor(private route: ActivatedRoute) {
    this.getPost();
  }

  post?: Post;

  ngOnInit(): void{}

  getPost(){
    const id = Number(this.route.snapshot.paramMap.get("id")); //Extrai o id da nossa url.
    this.postService.getPostById(id).subscribe((data: Post) => (this.post = data));
  }
}
