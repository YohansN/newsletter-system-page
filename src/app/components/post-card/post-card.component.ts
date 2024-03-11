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
import { PublicationOrderFilterService } from '../../services/publication-order-filter.service';
import { skip } from 'rxjs';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule, MatIconModule, 
    HttpClientModule, CommonModule, RouterModule, MatInputModule, MatPaginatorModule, MatTooltipModule],
  providers: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  
  postService = inject(PostService);
  filterOrderService = inject(PublicationOrderFilterService);

  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar){}

  posts:PostDetails[] = [];
  filterOrder : string = "desc";
  postUrl: string = '';

  ngOnInit():void {

    //Muda a order da busca por publicação (apenas quando o chips é apertado).
    this.filterOrderService.filterOrderValue.pipe(skip(1)).subscribe((order) => {
      this.filterOrder = order;
      this.postService.getAllPosts(this.pageSize, this.pageIndex, this.filterOrder).subscribe((data) => (this.posts = data));
    });

    //Faz o primeiro request get
    this.postService.getAllPosts(this.pageSize, this.pageIndex, this.filterOrder).subscribe((data) => (this.posts = data));
    
    this.postService.getTotalNumberOfPosts().subscribe((data) => (this.length = data));
    
    this.postUrl = window.location.href;
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

    this.postService.getAllPosts(this.pageSize, this.pageIndex, this.filterOrder).subscribe((data) => (this.posts = data));
  }

  //Botão de compartilhar link
  copyLinkToClipBoard(postId: number){ 
    this.clipboard.copy(`${this.postUrl}/publicacao/${postId}`);
    this.openSnackBar();
  }

  private openSnackBar() {
    this.snackBar.open("Link da publicação copiado!", 'Fechar' ,{duration: 4000});
  }

}
