import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_KEY,API_BASE_URL} from '../../assets/config.js';

@Injectable()
export class CardDataService {
    data:any[]
    constructor(private http: HttpClient) { }
    getCardData(city:string) {
        const url = `${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        return this.http.get<Card>(url);
    }  
}

export interface Card {
    data:{},
    city:any,
    name:string,
    list:any[],
    id:number,
    icon:any,
    weatherName:string,
    weatherDate:string,
    temp:number,
    minTemp:number,
    maxTemp:number,
    feelsLike:number,
  }

  export interface CardBoard {
    icon:any,
    weatherName:string,
    weatherDate:string,
    temp:number,
    minTemp:number,
    maxTemp:number,
    feelsLike:number,
  }