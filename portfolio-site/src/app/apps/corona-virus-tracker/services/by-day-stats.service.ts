import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ByDayStatsService {

  constructor(private http: HttpClient) { }

  getStatsByDay(){
    return this.http.get("https://pomber.github.io/covid19/timeseries.json")
  }
}
