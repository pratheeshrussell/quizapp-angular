import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { QuizDataResolver } from './resolvers/quiz-data.resolver';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'quiz', component: QuizPageComponent, resolve: {quizData: QuizDataResolver}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'not-found', component: ErrorPageComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
