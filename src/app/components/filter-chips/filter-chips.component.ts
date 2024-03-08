import { Component, inject } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { PublicationOrderFilterService } from '../../services/publication-order-filter.service';

@Component({
  selector: 'app-filter-chips',
  standalone: true,
  imports: [MatChipsModule],

  templateUrl: './filter-chips.component.html',
  styleUrl: './filter-chips.component.scss'
})
export class FilterChipsComponent {

  filterOrderService = inject(PublicationOrderFilterService);
  
  getMostRecentPosts(){
    console.log("Publicações mais recentes selecionado.");
    this.filterOrderService.changePublicationOrder("desc"); //Ordena pelos posts mais recentes
  }
  
  getOlderPosts(){
    console.log("Publicações mais antigas selecionado.");
    this.filterOrderService.changePublicationOrder("asc"); //Ordena pelos posts mais antigos
  }

}
