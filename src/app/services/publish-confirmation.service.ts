import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublishConfirmationService {
  //Service intermediária para comunicação entre componente dialog de confirmação e view de publicação de texto. 

  private publishConfirmedSource = new Subject<void>();
  publishConfirmed$ = this.publishConfirmedSource.asObservable();
  
  confirmPublish(){
    this.publishConfirmedSource.next();
  }

}
