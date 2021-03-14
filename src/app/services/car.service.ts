import { Injectable } from '@angular/core';
import { CarResponseModel } from '../models/carResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiurl = 'https://localhost:44356/api/cars/getall';

  constructor(private HttpClient: HttpClient) {}

  getCars(): Observable<CarResponseModel> {
    return this.HttpClient.get<CarResponseModel>(this.apiurl);
  }
}
