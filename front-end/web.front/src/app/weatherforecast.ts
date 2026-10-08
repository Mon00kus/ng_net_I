import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Weatherforecast {

  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}WeatherForecast`;

  constructor(){

  }  

  getWeaterForecast(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

}
