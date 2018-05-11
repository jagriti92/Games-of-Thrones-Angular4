import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AppHttpService } from '../app-http.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public currentBook: any;
  public bookId: any;

  constructor(public _route: ActivatedRoute, public router: Router, public appHttpService: AppHttpService, public location: Location) { }

  ngOnInit() {
    console.log("Book view Component onInit is called");

    this.bookId = this._route.snapshot.paramMap.get('bookId');
    console.log(this.bookId);
    this.getBookDetails(this.bookId);
  }
  getBookDetails(id) {
    //Handling Observable response.
    this.appHttpService.getBookInfo(id).subscribe(
      data => {
        this.currentBook = data;
        console.log("book" + data);
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }
  public goBackToPreviousPage(): any {
    this.location.back();
  }

}