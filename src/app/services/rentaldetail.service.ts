import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from '../models/rentalDetailResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentaldetailService {
  apiurl: string = 'https://localhost:44356/api/rentals/getrentaldetails';
  constructor(private HttpClient: HttpClient) {}

  getRentalDetails(): Observable<RentalDetailResponseModel> {
    return this.HttpClient.get<RentalDetailResponseModel>(this.apiurl);
  }
}
