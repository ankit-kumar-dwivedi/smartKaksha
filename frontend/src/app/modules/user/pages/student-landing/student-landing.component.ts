import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-landing',
  templateUrl: './student-landing.component.html',
  styleUrls: ['./student-landing.component.css']
})
export class StudentLandingComponent implements OnInit {

  topics = [
    {
      name: 'Introduction to Inheritance',
      feedback: 'true',
    },
    {
      name: 'Types of Inheritance',
      feedback: 'true',
    }
  ];
  API_URL = 'http://localhost:8000';
  username;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.topics);
    // this.username = this.http.get(this.API_URL + '/me').subscribe(
    //   (data: any) => {
    //     this.username = data.username;
    //   }
    // );
    // let tempUsername = 'gaurav';
    console.log(this.username);
    this.http.get(this.API_URL + '/getLessonPlan/' + this.username).subscribe(
      (data: any) => {
        this.topics = data.data;
        console.log(this.topics);
      }
    );
  }

  submit(): void {
    console.log('fired');
    // let tempUsername = 'gaurav';
    this.http.post(this.API_URL + '/feedback', this.topics).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

}
