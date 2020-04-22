import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatesCountiesJhuService {

  constructor(private http: HttpClient) { }

  getStatesCounties(country: string, state?: string){
    let params: HttpParams

    if(state){
      params = new HttpParams()
      .set('country', country)
      .set('state', state)
    } else{
      params = new HttpParams()
      .set('country', country)
    }


    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')

    let options: any = {}
    options.headers = headers
    options.params = params

    return this.http.get(environment.covid19ApiUrl + '/states-county-jhu', {params: params})
  }
}
