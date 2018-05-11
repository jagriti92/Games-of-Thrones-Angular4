import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AppHttpService } from '../app-http.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  public currentHouse: any;
  public houseId: any;

  constructor(public _route: ActivatedRoute, public router: Router, public appHttpService: AppHttpService, public location: Location) { }

  ngOnInit() {
    console.log("House view Component onInit is called");

    this.houseId = this._route.snapshot.paramMap.get('houseId');
    console.log(this.houseId);
    this.getHouseDetails(this.houseId);
  }
  getHouseDetails(id) {
    //Handling Observable response.
    this.appHttpService.getHouseInfo(id).subscribe(
      data => {
        this.currentHouse = data;
        console.log("house" + data);
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