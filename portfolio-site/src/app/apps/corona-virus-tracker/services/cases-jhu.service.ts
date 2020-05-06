import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CasesJhuService {

  constructor(private http: HttpClient) { }

  getJhuCases(country: string, state: string, county: string){
    let params: any = {}

    if (county == null){
      params = new HttpParams()
      .set('country', country)
      .set('state', state)
    } else {
      params = new HttpParams()
      .set('country', country)
      .set('state', state)
      .set('county', county)
    }

    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')

    let options: any = {}
    options.headers = headers
    options.params = params

    return this.http.get(environment.covid19ApiUrl + '/cases-jhu', {params: params})
  }
}
