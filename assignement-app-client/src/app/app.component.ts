import { Component } from '@angular/core';
import { AuthService } from './util/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titre = 'ToDo List';

  constructor(private authService:AuthService) {}

  loginLogout() {
    if(this.authService.loggedIn) {
      this.authService.logOut();
    } else {
      this.authService.logIn();
    }
  }
}
