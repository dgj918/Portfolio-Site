import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CyberTtpServiceService {

  constructor(private http: HttpClient) { }

  getTopHundred(){
    return this.http.get(environment.cyberTtpApiUrl)
  }


}
