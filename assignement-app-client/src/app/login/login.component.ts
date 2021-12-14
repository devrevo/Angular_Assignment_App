import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../assignements/user.model';
import { AuthService } from '../util/auth.service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  username?: string = '';
  password?: string = '';

  constructor(private authService:AuthService,
              private router:Router) {}

  ngOnInit(): void {}

  onSubmit() {
    let user = new User();
    if (this.username && this.password) {
      user.username = this.username;
      user.password = this.password;
      
      this.authService.logIn(user)
      .subscribe(() => {
        this.router.navigate(["/home"]);
      });
    }
  }
}