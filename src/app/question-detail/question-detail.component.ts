import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  @Input() question: string;
  @Input() options = [];

  questions = [];
  constructor(public dataService: DataService) {}
  ngOnInit() {
    console.log(this.options);
  }
}
