import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private currentIndex$ = new BehaviorSubject(0);

  questions = [
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      options: ['scripting test', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which HTML element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    }
  ];

  getCurrentIndex() {
    return this.currentIndex$.asObservable();
  }

  setCurrentIndex(index: any) {
    this.currentIndex$.next(index);
  }

  getQuestions() {
    return this.questions;
  }

  getQuestionOnIndex(index: number) {
    return this.questions[index];
  }
}
