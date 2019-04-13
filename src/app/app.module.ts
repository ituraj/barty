// Predefined Angular Modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// View Components Declarations

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { NavComponent } from './nav/nav.component';
import { RatingComponent } from './rating/rating.component';

// Fontawesome Module with icons used for rating

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Custom Pipes

import { TruncatePipe } from './truncate.pipe';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    NavComponent,
    RatingComponent,
    TruncatePipe,
    JumbotronComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
