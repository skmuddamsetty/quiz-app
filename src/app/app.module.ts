import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeSignInComponent } from './home-sign-in/home-sign-in.component';
import { FormsModule } from '@angular/forms';
import { QuetionsComponent } from './quetions/quetions.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { DataService } from './data.service';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSignInComponent,
    QuetionsComponent,
    QuestionDetailComponent,
    QuestionPaperComponent,
    WelcomeComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
