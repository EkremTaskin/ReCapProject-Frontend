import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  CarDetails: CarDetail[] = [];
  constructor(private CardetailService: CardetailService) {}

  ngOnInit(): void {
    this.getCarDetail();
  }

  getCarDetail() {
    this.CardetailService.getCarDetails().subscribe(
      (response) => (this.CarDetails = response.data)
    );
  }
}
