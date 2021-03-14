import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiurl = 'https://localhost:44356/api/brands/getall';

  constructor(private HttpClient: HttpClient) {}

  getBrands(): Observable<BrandResponseModel> {
    return this.HttpClient.get<BrandResponseModel>(this.apiurl);
  }
}
