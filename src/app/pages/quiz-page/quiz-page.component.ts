import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizQuestions } from 'src/app/models/quiz.model';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }

  name = '';
  quizData: QuizQuestions[] = [];
  ngOnInit(): void {
    this.name = this.route.snapshot.queryParams.name;
    // Another way to get this data will be through the service
    this.quizData = this.route.snapshot.data.quizData;
  }

}
