import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey: string = environment.apiKey;
  URI: string = '';
  forecastURI: string ='';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
    this.forecastURI = `https://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}&units=metric&q=`;
   }

   getWeather(cityName: string, countryCode: string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
   }

   get5DayForecast(cityName: string, countryCode: string) {
    return this.http.get(`${this.forecastURI}${cityName},${countryCode}`)
   }
}

