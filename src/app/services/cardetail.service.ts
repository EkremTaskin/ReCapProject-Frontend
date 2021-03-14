import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CardetailService {
  apiurl: string = 'https://localhost:44356/api/cars/getcardetails';

  constructor(private HttpClient: HttpClient) {}

  getCarDetails(): Observable<CarDetailResponseModel> {
    return this.HttpClient.get<CarDetailResponseModel>(this.apiurl);
  }
}
