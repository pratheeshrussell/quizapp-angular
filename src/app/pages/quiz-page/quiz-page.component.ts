import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizQuestions } from 'src/app/models/quiz.model';
import { QuizDataService } from 'src/app/services/quiz-data.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private quizService: QuizDataService) { }

  name = '';
  // resultText = '';
  errorMsg = '';
  quizData: QuizQuestions[] = [];
  totalCount = 0; correctCount = -1;
  ngOnInit(): void {
    // get name from query param
    this.name = this.route.snapshot.queryParams.name;
    // Another way to get this data will be through the service
    // Make sure to handle error
    if (typeof this.route.snapshot.data.quizData === 'string') {
      this.errorMsg = this.route.snapshot.data.quizData;
      this.quizData = [];
    } else {
      this.errorMsg = '';
      this.quizData = this.route.snapshot.data.quizData;
      this.totalCount = this.quizData.length;
    }
    // set validation defaults
    this.quizService.answerValidations = new Array(this.quizData.length).fill(false);
  }

  doValidate(): void{
    let correctCount = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.quizData.length; i++){
      if (this.quizService.answerValidations[i] === true){
      correctCount += 1;
      }
    }
    this.quizService.isValidated = true;
    this.quizService.validatedEmitter.next(true); // emit message
    this.correctCount = correctCount; // use pipe to output the message
  }

  doClear(): void{
    this.quizService.isValidated = false;
     // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.quizData.length; i++){
      this.quizService.answerValidations[i] = false;
    }
    this.quizService.validatedEmitter.next(false); // emit message
    this.quizService.clearEmitter.next(true);
    this.correctCount = -1;
  }

}
