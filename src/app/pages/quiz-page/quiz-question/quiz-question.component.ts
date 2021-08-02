import { Component, Input, OnInit } from '@angular/core';
import { QuizQuestions } from 'src/app/models/quiz.model';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('question') questionData!: QuizQuestions;
  // tslint:disable-next-line: no-input-rename
  @Input('index') questionIndex = -1;
  constructor() { }

  ngOnInit(): void {
  }

}
