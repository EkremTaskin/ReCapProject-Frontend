import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentaldetailService } from 'src/app/services/rentaldetail.service';

@Component({
  selector: 'app-rentaldetail',
  templateUrl: './rentaldetail.component.html',
  styleUrls: ['./rentaldetail.component.css'],
})
export class RentaldetailComponent implements OnInit {
  RentalDetails: RentalDetail[] = [];
  constructor(private RentaldetailService: RentaldetailService) {}

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails() {
    this.RentaldetailService.getRentalDetails().subscribe(
      (response) => (this.RentalDetails = response.data)
    );
  }
}
