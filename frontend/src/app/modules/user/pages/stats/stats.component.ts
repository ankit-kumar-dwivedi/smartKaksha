import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  topics = [
    {
      name: "Introduction to Inheritance",
      score: "9",
      total: "10",
    },
    {
      name: "Types of Inheritance",
      score: "5",
      total: "10",
    }
  ];
  API_URL = 'http://localhost:8000';

  ngOnInit() {
    this.refresh();
  }

  refresh(): void {
    this.http.get(this.API_URL + '/getScores').subscribe(
      (data: any) => {
        this.topics = data.data;
        console.log(this.topics);
      }
    );
  }

}
