import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent implements OnInit {
  questions = [];
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.questions = this.dataService.getQuestions();
    console.log(this.questions);
  }

  createRange(number) {
    for (let i = 1; i <= number; i++) {
      this.questions.push(i);
    }
  }
}
