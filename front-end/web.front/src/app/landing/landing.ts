import { Component, inject } from '@angular/core';
import { Weatherforecast } from '../weatherforecast';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
 WeatherforecastSevice =  inject(Weatherforecast);
 weater: any[] = [];
 constructor() {
    this.WeatherforecastSevice.getWeaterForecast().subscribe(weater => {
      this.weater = weater;
    }
   );
 }
}
