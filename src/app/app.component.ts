import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  isLoggedInSubscription: Subscription;

  constructor(public authService: AuthService) {
    this.isLoggedInSubscription = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  ngOnDestroy() {
    this.isLoggedInSubscription.unsubscribe();
  }

  signOut() {
    this.authService.signOut();
  }
}
