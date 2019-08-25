import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  hide: boolean = true;
  bit: number = 0;
  name: string = '';
  username: string = '';
  password: string = '';
  messageVisibility: boolean = false;
  messages: string = '';
  userAuthenticated: boolean = false;
  status: string = '';
  loginURL: string = 'http://localhost:8000/login';
  registerURL: string = 'http://localhost:8000/register';
  selector = 'student';
  role;

  ngOnInit() {
  }

  setBit(update): void {
    this.messageVisibility = false;
    this.messages = '';
    this.name = '';
    this.password = '';
    this.username = '';
    this.bit = update;
  }

  login(): void {
    console.log('angular pings');
    // this.status = this.http.get(this.loginURL + "/" + this.username + "/" + this.password)['status']
    this.http.get(this.loginURL + "/" + this.role + "/" + this.username + "/" + this.password).subscribe(
      (data: any) => {
        this.status = data['status'];
        this.messages = data['message'];
        this.name = data['name'];
        console.log(this.messages, this.status, this.name);
      },
      error => console.log(error),
      () => {
        if (this.status === 'success') {
          //localStorage.setItem('username', this.username);
          // this.user.userLogin(this.name);
          this.router.navigate(this.selector === 'student' ? ['studentLanding'] : ['teacherLanding']);
        } else {
          this.messageVisibility = true;
        }
      }
    );
  }
  register(): void {
    this.http.get(this.registerURL + "/" + this.name + "/" + this.role + "/" + this.username + "/" + this.password).subscribe(
      data => {
        this.status = data['status'];
        this.messages = data['message'];
      },
      error => console.log(error),
      () => {
        if (this.status === 'success') {
          // this.user.userLogin(this.name);
          // localStorage.setItem('username', this.username);
          this.router.navigate(this.selector === 'student' ? ['studentLanding'] : ['teacherLanding']);
        } else {
          this.messageVisibility = true;
        }
      }
    );
  }

}
