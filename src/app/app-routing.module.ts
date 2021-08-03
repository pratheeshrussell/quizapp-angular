import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParamCheckerGuard } from './guards/param-checker-guard.guard';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { QuizDataResolver } from './resolvers/quiz-data.resolver';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'quiz', component: QuizPageComponent, resolve: {quizData: QuizDataResolver}, canActivate:[ParamCheckerGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'not-found', component: ErrorPageComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
