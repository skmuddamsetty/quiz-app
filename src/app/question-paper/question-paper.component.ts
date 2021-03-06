import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';

@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent implements OnInit {
  questions = [];
  question: any;
  cat: string;
  currentIndex: number;
  questionsLength: number;
  disableNext = false;
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCurrentCat().subscribe(cat => {
      this.cat = cat;
      if (cat === 'html') {
        this.questions = this.dataService.getHtmlQuestions();
        this.questionsLength = this.questions.length - 1;
      } else if (cat === 'css') {
        this.questions = this.dataService.getCssQuestions();
        this.questionsLength = this.questions.length - 1;
      }
    });
    console.log(this.questionsLength);
    // this.questions = this.dataService.getQuestions();
    this.dataService.getCurrentIndex().subscribe(index => {
      this.currentIndex = index;
      this.question = this.dataService.getQuestionOnIndex(
        this.currentIndex,
        this.cat
      );
      if (this.currentIndex === this.questionsLength) {
        this.disableNext = true;
      } else {
        this.disableNext = false;
      }
    });
  }

  createRange(number) {
    for (let i = 1; i <= number; i++) {
      this.questions.push(i);
    }
  }

  incrementIndex() {
    this.dataService.setCurrentIndex(this.currentIndex + 1);
  }
}
