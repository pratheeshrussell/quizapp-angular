import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from 'src/app/constants/app-constants';
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
  resultText = '';
  quizData: QuizQuestions[] = [];
  ngOnInit(): void {
    this.name = this.route.snapshot.queryParams.name;
    // Another way to get this data will be through the service
    this.quizData = this.route.snapshot.data.quizData;
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
    this.resultText = AppConstants.resultText.replace('{correct}', correctCount.toString())
    .replace('{total}', this.quizData.length.toString());
    // console.log('correct answers: ' , correctCount);
    // console.log('wrong answers: ' , (this.quizData.length - correctCount));
  }

  doClear(): void{
    this.quizService.isValidated = false;
     // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.quizData.length; i++){
      this.quizService.answerValidations[i] = false;
    }
    this.quizService.validatedEmitter.next(false); // emit message
    this.quizService.clearEmitter.next(true);
    this.resultText = '';
  }

}
