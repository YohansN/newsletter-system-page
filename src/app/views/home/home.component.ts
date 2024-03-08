import { Component } from '@angular/core';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { FilterChipsComponent } from '../../components/filter-chips/filter-chips.component';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilterChipsComponent, NavigationBarComponent ,PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
