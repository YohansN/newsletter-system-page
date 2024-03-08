import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationOrderFilterService {
  //Service para comunicação entre componente filter-chips e post-card
  private filterOrderSource = new BehaviorSubject<string>('');
  public filterOrderValue = this.filterOrderSource.asObservable();

  constructor() { }

  changePublicationOrder(filterOrderValue: string){
    this.filterOrderSource.next(filterOrderValue);
  }
}
