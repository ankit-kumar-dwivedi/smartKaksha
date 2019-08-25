import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-plan',
  templateUrl: './lesson-plan.component.html',
  styleUrls: ['./lesson-plan.component.css']
})
export class LessonPlanComponent implements OnInit {

  topics = [];
  currentTopic;
  API_URL = 'http://localhost:8000';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  addTopic(): void {
    // console.log('Fired');
    // console.log(this.currentTopic);
    this.topics.push(this.currentTopic);
    this.currentTopic = '';
  }

  removeTopic(name): void {
    // console.log('fired', name, this.topics.indexOf(name));
    this.topics.splice(this.topics.indexOf(name), 1);
  }

  publish(): void {
    this.http.post(this.API_URL + '/publish', this.topics).subscribe(
      (data: any) => {
        if (data.status === 'success') {
          console.log('Published new plan');
          this.router.navigate(['stats']);
        } else {
          console.log(data);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
