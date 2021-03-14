import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiurl: string = 'https://localhost:44356/api/customers/getall';

  constructor(private HttpClient: HttpClient) {}

  getCustomers(): Observable<CustomerResponseModel> {
    return this.HttpClient.get<CustomerResponseModel>(this.apiurl);
  }
}
