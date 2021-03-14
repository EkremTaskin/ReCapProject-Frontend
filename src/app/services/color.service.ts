import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColorResponseModel } from '../models/colorResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiurl: string = 'https://localhost:44356/api/colors/getall';

  constructor(private HttpClient: HttpClient) {}

  getColors(): Observable<ColorResponseModel> {
    return this.HttpClient.get<ColorResponseModel>(this.apiurl);
  }
}
