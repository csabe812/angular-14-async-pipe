import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-14-async-pipe';
  user$: Observable<{ id: number; email: string }>;

  constructor(private hello: HelloService) {
    this.user$ = this.hello.getRandomUser();
  }
}
