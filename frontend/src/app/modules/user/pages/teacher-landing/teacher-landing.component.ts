import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-landing',
  templateUrl: './teacher-landing.component.html',
  styleUrls: ['./teacher-landing.component.css']
})
export class TeacherLandingComponent implements OnInit {

  students = [
    {
      NAME: 'Prabodh Ranjan Swain',
      ENROLL: '02410402716',
      AR: false,
    },
    {
      NAME: 'Ankit Kumar Dwivedi',
      ENROLL: '00410402716',
      AR: false,
    },
    {
      NAME: 'Gaurav Bholla',
      ENROLL: '01210402716',
      AR: false,
    }
  ];
  API_URL = 'http://localhost:8000';

  constructor(private http: HttpClient, private router: Router) {
    this.http.get(this.API_URL + '/allstudents').subscribe(
      (data: any) => {
        this.students = data.student;
        console.log(this.students);
      }
    );
  }

  ngOnInit() {
  }

  submitAttendance(): void {
    console.log(this.students[0]);
    this.http.post(this.API_URL + '/markattendance', { student: this.students }).subscribe(
      (data: any) => {
        if (data.status === 'success') {
          this.router.navigate(['lessonPlan']);
        } else {
          console.log(data);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  toggle(e, student) {
    console.log(e);
    if (e.source.checked) {
      student.ar = true;
    } else {
      student.ar = false;
    }
  }

}
