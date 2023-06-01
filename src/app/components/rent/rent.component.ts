import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rent } from 'src/app/models/rent';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  updateStatusForm: FormGroup;
  rentList: Rent[] = [];
  categoryId: number;
  dataLoaded = false;

  constructor(
    private rentService: RentService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.rentUpdateStatusForm();
    this.activatedRoute.params.subscribe((params) => {
      this.getListByCategory(params['id']);
    });
  }

  rentUpdateStatusForm() {
    this.updateStatusForm = this.formBuilder.group({
      Id: [null],
      statusId: [null],
    });
  }

  updateStatus(id: number, status: number) {
    if (id != null && status != null) {
      this.updateStatusForm.value.Id = id;
      this.updateStatusForm.value.statusId = status;
      let rentUpdateStatusModel = Object.assign(
        {},
        this.updateStatusForm.value
      );

      this.rentService.update(rentUpdateStatusModel).subscribe((response) => {
        window.location.reload();
        this.toastrService.info('Araba Teslim Edildi', 'Basarili');
      });
    }
  }

  getListByCategory(rentCategoryId: number) {
    this.rentService.getListByCategory(rentCategoryId).subscribe((response) => {
      this.rentList = response;
      this.categoryId = rentCategoryId;
      this.dataLoaded = true;
    });
  }
}
