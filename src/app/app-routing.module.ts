import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSignInComponent } from './home-sign-in/home-sign-in.component';
import { QuetionsComponent } from './quetions/quetions.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home-sign-in', component: HomeSignInComponent },
  { path: 'questions', component: QuetionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
