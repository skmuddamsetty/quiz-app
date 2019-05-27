import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(public router: Router, public dataService: DataService) {}
  question = [];
  ngOnInit() {}

  onsubmit(category: string) {
    this.dataService.setCurrentCat(category);
    this.router.navigate(['/questions']);
  }
}
