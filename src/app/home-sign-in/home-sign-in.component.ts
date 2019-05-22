import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-sign-in',
  templateUrl: './home-sign-in.component.html',
  styleUrls: ['./home-sign-in.component.scss']
})
export class HomeSignInComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    localStorage.setItem('username', form.value.email);
    this.router.navigate(['/questions']);
  }
}
