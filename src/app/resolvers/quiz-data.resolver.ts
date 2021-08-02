import { Injectable } from '@angular/core';
import { Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { QuizDataService } from '../services/quiz-data.service';
import { catchError, map, tap } from 'rxjs/operators';
import { QuizQuestions } from '../models/quiz.model';
import { AppConstants } from '../constants/app-constants';

@Injectable({providedIn: 'root'})
export class QuizDataResolver implements Resolve<string | QuizQuestions[]> {
  constructor(private quizService: QuizDataService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string | QuizQuestions[]> {
   return this.quizService.getDataObservable().pipe(
     map((data: any) => {
       return data.results;
     }),
     tap((data: any) => {
       // not needed just for learning
      this.quizService.setQuizData(data);
     }),
     catchError(error => {
       return of(AppConstants.errorCodes.NoData);
     })
   );
  }
}
