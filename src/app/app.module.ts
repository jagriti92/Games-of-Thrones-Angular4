import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
// router module used for setting up the application level route
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { CharacterComponent } from './character/character.component';
import { HouseComponent } from './house/house.component';
import { BooksComponent } from './books/books.component';
import { AppHttpService } from './app-http.service';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    HouseComponent,
    BooksComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'book/:bookId', component: BooksComponent },
      { path: 'character/:characterId', component: CharacterComponent },
      { path: 'house/:houseId', component: HouseComponent },
    ])
  ],
  providers: [AppHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
