import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  operation: any = 'login'
  email: string = null
  password: string = null
  nick: string = null
  constructor( private authService: AuthService, private userService: UserService, private router: Router) {
    console.log(this.operation)
  }

  login() {
    this.authService.loginWithEmail(this.email, this.password)
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  register() {
    this.authService.registerWithEmail(this.email, this.password)
      .then(data => {
        const user = {
          uid: data.user.uid,
          email: this.email,
          nick: this.nick,
        }
        this.userService.createUser(user)
          .then( data2 =>{
            this.router.navigate(['home'])
          })
          .catch( err2 => console.log(err2))
      })
      .catch(err => {
        console.log(err)
      })
  }

  ngOnInit() {
  }

}
