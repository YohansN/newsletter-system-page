import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserSubscriber } from '../interfaces/UserSubscriber';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  httpClient = inject(HttpClient);

  apiUrl = "http://localhost:8080/subscriber";

  newSubscriber(subscriber: UserSubscriber): Observable<UserSubscriber> {
    return this.httpClient.post<UserSubscriber>(`${this.apiUrl}`, subscriber);
  }
}
