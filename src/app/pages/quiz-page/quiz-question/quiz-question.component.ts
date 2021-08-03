import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizQuestions } from 'src/app/models/quiz.model';
import { QuizDataService } from 'src/app/services/quiz-data.service';
import { SupportService } from 'src/app/services/support.service';

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

  options: string[] = [];
  correctOption = '';

  isValidated = false;

  // Using Reactive Forms for the sake of using it
  form = new FormGroup({
    selectedOption: new FormControl('', Validators.required)
  });
  constructor(private quizService: QuizDataService) { }

  ngOnInit(): void {
    this.setOptions();
    // listen for events
    this.quizService.validatedEmitter.subscribe(data => {
        this.isValidated = this.quizService.isValidated;
    });
    this.quizService.clearEmitter.subscribe(data => {
      this.isValidated = false;
      this.form.patchValue({selectedOption: ''});
  });
  }

  setOptions(): void{
    this.options.push(...this.questionData.incorrect_answers);
    this.options.push(this.questionData.correct_answer);
    this.correctOption = this.questionData.correct_answer;
    // this.options = this.supportService.arrayShuffle(this.options); // use pipe instead
  }

  setValidationOption(): void{
    if (this.form.value.selectedOption === this.correctOption){
      this.quizService.answerValidations[this.questionIndex] = true;
    } else {
      this.quizService.answerValidations[this.questionIndex] = false;
    }
    this.quizService.isValidated = false;
    this.quizService.validatedEmitter.next(false); // emit message
  }

  getBgColor(option: string): any{
    const returner = {backgroundColor: 'white' };
    if (this.isValidated){
    if (option === this.correctOption){
      returner.backgroundColor = 'green';
    }
    if (option !== this.correctOption && option === this.form.value.selectedOption){
      returner.backgroundColor = 'red';
    }}
    return returner;
  }

}
