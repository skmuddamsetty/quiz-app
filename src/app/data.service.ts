import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions = [
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

  getQuestions() {
    return this.questions;
  }
}
