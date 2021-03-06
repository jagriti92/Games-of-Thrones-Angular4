import { Injectable } from '@angular/core';
// import http client to make request
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

//Observable imports//
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class AppHttpService {
  public allData;
  public currentData;
  //base url's for each api
  public characterApi = "https://www.anapioficeandfire.com/api/characters";
  public bookApi = "https://www.anapioficeandfire.com/api/books";
  public houseApi = "https://www.anapioficeandfire.com/api/houses";

  constructor(private _http: HttpClient) {
    console.log('service calling');
  }
  // Error Handler
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getAllCharacters(): any {
    let myCharacterResponse = this._http.get(this.characterApi);
    return myCharacterResponse;
  }

  getAllBooks() {
    let myBooksResponse = this._http.get(this.bookApi);
    return myBooksResponse;
  }

  getAllHouses() {
    let myHouseResponse = this._http.get(this.houseApi);
    return myHouseResponse;
  }

  //get response of a particular character, book and house

  getCharacterInfo(characterId): any {
    let mySingleCharacterResponse = this._http.get(this.characterApi+'/'+characterId);
    return mySingleCharacterResponse;
  }

  getBookInfo(bookId): any {
    let mySingleBookResponse =
      this._http.get(this.bookApi+'/'+bookId);
    return mySingleBookResponse;
  }

  getHouseInfo(houseId): any {
    let mySingleHouseResponse = this._http.get(this.houseApi+'/' 
    +houseId);
    return mySingleHouseResponse;
  }
}