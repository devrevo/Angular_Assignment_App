import { Component } from '@angular/core';
import { AuthService } from './util/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titre = 'ToDo List';

  constructor(private authService:AuthService,
              private router:Router) {}

  loginLogout() {
    if(this.authService.loggedIn) {
      this.authService.logOut();
      this.router.navigate(["/login"]);
    } else {
      this.router.navigate(["/home"]);
    }
  }
}
