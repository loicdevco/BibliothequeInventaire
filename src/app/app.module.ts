import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BibliographieComponent } from './bibliographie/bibliographie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterBookComponent } from './register-book/register-book.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { SimpleBookComponent } from './simple-book/simple-book.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BibliographieComponent,
    RegisterBookComponent,
    NewBookComponent,
    BookComponent,
    SimpleBookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
