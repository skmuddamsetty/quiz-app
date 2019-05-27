import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private currentIndex$ = new BehaviorSubject(0);
  private currentCat$ = new BehaviorSubject('');

  htmlQuestions = [
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

  cssQuestions = [
    {
      question: 'Inside which CSS element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which CSS element do we put the JavaScript?',
      options: ['scripting test', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which CSS element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which CSS element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which CSS element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    }
  ];

  javaScriptQuestions = [
    {
      question: 'Inside which JAVA element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which JAVA element do we put the JavaScript?',
      options: ['scripting test', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which JAVA element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which JAVA element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which JAVA element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    }
  ];

  sqlQuestions = [
    {
      question: 'Inside which SQL element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which SQL element do we put the JavaScript?',
      options: ['scripting test', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which SQL element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which SQL element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    },
    {
      question: 'Inside which SQL element do we put the JavaScript?',
      options: ['scripting', 'js', 'script', 'javascript']
    }
  ];

  getCurrentIndex() {
    return this.currentIndex$.asObservable();
  }

  setCurrentIndex(index: any) {
    this.currentIndex$.next(index);
  }

  getCurrentCat() {
    return this.currentCat$.asObservable();
  }

  setCurrentCat(cat: any) {
    this.currentCat$.next(cat);
  }

  getHtmlQuestions() {
    return this.htmlQuestions;
  }

  getCssQuestions() {
    return this.cssQuestions;
  }

  getJavaScriptQuestions() {
    return this.javaScriptQuestions;
  }

  getSqlQuestions() {
    return this.sqlQuestions;
  }

  getQuestionOnIndex(index: number, cat: string) {
    if (cat === 'html') {
      return this.htmlQuestions[index];
    } else if (cat === 'css') {
      return this.cssQuestions[index];
    }
  }
}
