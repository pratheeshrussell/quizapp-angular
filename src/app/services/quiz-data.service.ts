import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AppConstants } from '../constants/app-constants';
import { QuizQuestions } from '../models/quiz.model';

@Injectable({ providedIn: 'root'})
export class QuizDataService {
  private quizData: QuizQuestions[] = [];
  // Answer Validations
  answerValidations: boolean[] = [];
  isValidated = false;
  // Emitting data
  validatedEmitter = new Subject<boolean>();
  clearEmitter = new Subject<boolean>();

  constructor(private http: HttpClient) { }
  getDataObservable(): Observable<QuizQuestions[]>{
    return this.http.get<QuizQuestions[]>(AppConstants.quizUrl);
  }

  setQuizData(data: QuizQuestions[]): void{
    this.quizData = data;
  }

  getQuizData(): QuizQuestions[]{
   return this.quizData;
  }
}
