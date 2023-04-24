import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  url = 'https://random-data-api.com/api/users/random_user';

  constructor(private http: HttpClient) {}

  getRandomUser(): Observable<{ id: number; email: string }> {
    return this.http.get<{ id: number; email: string }>(this.url);
  }
}
