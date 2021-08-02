import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../constants/app-constants';
import { QuizQuestions } from '../models/quiz.model';

@Injectable({ providedIn: 'root'})
export class QuizDataService {
  private quizData: QuizQuestions[] = [];

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
