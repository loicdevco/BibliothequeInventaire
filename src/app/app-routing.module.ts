import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliographieComponent } from './bibliographie/bibliographie.component';
import { HomeComponent } from './home/home.component';
import { NewBookComponent } from './new-book/new-book.component';
import { RegisterBookComponent } from './register-book/register-book.component';
import { SimpleBookComponent } from './simple-book/simple-book.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bibliographie', component: BibliographieComponent },
  { path: 'bibliographie/:id', component: SimpleBookComponent },
  { path: 'create', component: NewBookComponent },
  { path: 'register', component: RegisterBookComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
