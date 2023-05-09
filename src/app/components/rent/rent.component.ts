import { Component, OnInit } from '@angular/core';
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

constructor(private rentService:RentService) {}

ngOnInit(): void {
  this.getRentList();
}

getRentList() {
  this.rentService.getRentList().subscribe((response) => {
    this.rentList = response;
    this.dataLoaded = true;
  });
}}
