import { Component } from '@angular/core';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [NavigationBarComponent, FooterComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
