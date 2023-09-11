import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularWeathercaster';
  location = { cityName: 'London', countryCode: 'uk' };
  weather: any = undefined;
  forecast: any = undefined;
  date: Date = new Date();
  timezoneOffset: number = 0;
  currentUtcTime: Date = new Date();
  localTime: Date = new Date();

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather(this.location.cityName, this.location.countryCode);
    this.get5DayForecast(this.location.cityName, this.location.countryCode)
  }

  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode).subscribe(
      (res) => {
        console.log(res);
        this.weather = res;
        // Get the current timezone
        this.timezoneOffset = this.weather.timezone;
        // Calculate the local time using the timezone offset
        this.localTime = new Date(
          this.currentUtcTime.getTime() + this.timezoneOffset * 1000
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }

  get5DayForecast(cityName: string, countryCode:string) {
    this.weatherService.get5DayForecast(cityName, countryCode).subscribe(
      (res) => {
        console.log(res);
        this.forecast = res;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode.value) {
      this.getWeather(cityName.value, countryCode.value);
      this.get5DayForecast(cityName.value, countryCode.value);

      cityName.value = '';
      countryCode.value = '';
    } else {
      alert('Please insert some values');
    }
    cityName.focus();
    return false;
  }
}
