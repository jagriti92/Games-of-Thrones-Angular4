import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AppHttpService } from '../app-http.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public currentCharacter: any;
  public characterId: any;

  constructor(public _route: ActivatedRoute, public router: Router, public appHttpService: AppHttpService, public location: Location) { }

  ngOnInit() {
    console.log("Character view Component onInit is called");

    this.characterId = this._route.snapshot.paramMap.get('characterId');
    console.log(this.characterId);
    this.getCharacterDetails(this.characterId);
  }
  getCharacterDetails(id) {
    //Handling Observable response.
    this.appHttpService.getCharacterInfo(id).subscribe(
      data => {
        this.currentCharacter = data;
        console.log("hjgh" + data);
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