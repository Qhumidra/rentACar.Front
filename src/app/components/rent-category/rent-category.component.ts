import { Component, OnInit } from '@angular/core';
import { RentCategory } from 'src/app/models/rentCategory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-rent-category',
  templateUrl: './rent-category.component.html',
  styleUrls: ['./rent-category.component.css']
})
export class RentCategoryComponent implements OnInit {
  categories: RentCategory[] = [];
  currentCategory: RentCategory;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getRentCategories();
  }

  getRentCategories() {
    this.categoryService.getRentCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  setCurrentCategory(category: RentCategory) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category:RentCategory){
    if(category == this.currentCategory){
      return "background-color: rgb(255, 86, 86)";
    }
    else{
     return "background-color: rgb(255, 170, 170)";
    }
  }

  getAllCategoryClass(){
    if(!this.currentCategory){
      return "background-color: rgb(255, 86, 86)";
    }
    else{
     return "background-color: rgb(255, 170, 170)";
    }
  }

}
