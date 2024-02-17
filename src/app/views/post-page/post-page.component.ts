import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss'
})
export class PostPageComponent {
  title: String = "título";
  synopsis: String = "Pequena descrição";
  author: String = "Author";
  releaseDate: String = "01/10/2002"
}
