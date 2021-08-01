import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }

  name = '';
  ngOnInit(): void {
    this.name = this.route.snapshot.queryParams.name;
  }

}
