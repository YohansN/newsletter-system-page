import { Component } from '@angular/core';
import { PostCardComponent } from '../../components/post-card/post-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
