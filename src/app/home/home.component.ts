import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public allData = [];

  constructor(public appHttpService: AppHttpService) {
    console.log('Home constructor Component Calling');
  }

  ngOnInit() {
    console.log("Home Component onInit is called");

    //handling observables response. for books

    this.appHttpService.getAllBooks().subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.allData = this.allData.concat(data);

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
    console.log(this.allData);

    //handling observables response for characters

    this.appHttpService.getAllCharacters().subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.allData = this.allData.concat(data)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )

    console.log(this.allData);

    //handling observables response for houses

    this.appHttpService.getAllHouses().subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.allData = this.allData.concat(data)

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )

    console.log(this.allData);
  }
  getItemId(item) {
    let id = item.url.match(/\d+/)[0]
    return id;
  }

  public search = ''
}
