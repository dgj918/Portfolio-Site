import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class HeadachesService {

  constructor(
    private http: HttpClient
  ) { }

  getHeadaches(){
    return this.http.get(environment.apiUrl)
  }

  postHeadache(headacheObj: any) {
    let intensityString = headacheObj.Intensity.toString()
    headacheObj.HeadAche_Date = moment(headacheObj.HeadAche_Date)
    let dateTimeString = headacheObj.HeadAche_Date.format('YYYY-MM-DD HH:MM:SS')
    let params = new HttpParams()
    .set('date_and_time', dateTimeString)
    .set('intensity', intensityString)
    .set('headache_trigger', headacheObj.Trigger)
    .set('medicine', headacheObj.Medicine)

    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json; charset=utf-8')

    let options:any = {}
    options.headers = headers
    options.params = params

    return this.http.post(environment.apiUrl, params, options)
  }
}
