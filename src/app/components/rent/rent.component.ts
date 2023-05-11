import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rent } from 'src/app/models/rent';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit{
rentList : Rent []= [];
dataLoaded = false;

constructor(private rentService:RentService,private activatedRoute:ActivatedRoute) {}

ngOnInit(): void {
  this.activatedRoute.params.subscribe((params) => {
      this.getListByCategory(params['id']);
  });}

getListByCategory(rentCategoryId: number) {
  this.rentService.getListByCategory(rentCategoryId).subscribe((response) => {
    this.rentList = response;
    this.dataLoaded = true;
  });
}
}
