import { Component, OnInit } from '@angular/core';
import { CasesJhuService } from '../../services/cases-jhu.service';
import { StatesCountiesJhuService } from '../../services/states-counties-jhu.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface casesResponse {
  'timeSeriesData': casesForADay[]
  'currentData': casesForADay
  'minusOneDay': casesForADay
  'minusOneWeek': casesForADay
}

export interface casesForADay {
  'admin2': string
  'province_state': string
  'country_region': string
  'last_update': string
  'confirmed': string
  'deaths': string
}

export interface location {
  country: string
  state: string
  county: string
}

export interface selectedLocation {
  country: string;
  state: string; 
  county: string;
}

@Component({
  selector: 'app-jhu-cases-table',
  templateUrl: './jhu-cases-table.component.html',
  styleUrls: ['./jhu-cases-table.component.scss']
})
export class JhuCasesTableComponent implements OnInit {
  currentCaseData: jhuCasesData

  currentSelectedLocationObj: location

  locationSelectForm: FormGroup;
  countries: string[];
  states: string[];
  counties: string[];
  selectedCountry: string;
  selectedState: string;
  selectedCounty: string;
  currentSelectedLocation: selectedLocation

  constructor(private jhuCasesServ: CasesJhuService,
    private jhuStatesCountiesService: StatesCountiesJhuService,
    private fb: FormBuilder) { 

    this.counties = ['US']
    this.states = []
    this.counties = []

    this.currentSelectedLocation = {
      country: 'US',
      state: 'Texas',
      county: 'Harris'
    }
  }

  ngOnInit(): void {
    this.getCases()
    this.getStates()

    this.locationSelectForm = this.fb.group({
      country: ['US', Validators.required],
      state: ['', Validators.required],
      county: ['', Validators.required],
    });

    this.checkForStateChanges()
    this.checkForCountyChanges()
    this.getStates()
  }
  
  checkForStateChanges(){
    this.locationSelectForm.get('state').valueChanges.subscribe(state =>{
      this.currentSelectedLocation.state = state
      this.currentSelectedLocation.county = null
      this.getCases()
      this.getCounties()  
    })
  }

  checkForCountyChanges(){
    this.locationSelectForm.get('county').valueChanges.subscribe(county =>{
      this.currentSelectedLocation.county = county
      this.getCases()
    })
  }

  getCases(){
    this.jhuCasesServ.getJhuCases(this.currentSelectedLocation.country, this.currentSelectedLocation.state, this.currentSelectedLocation.county).subscribe((data: jhuCasesData) =>{
      console.log(data)
      let dataArr: casesForADay[] = data.timeSeriesData
      let dataArrSpecific: jhuCasesData = data
      let dataLen = dataArr.length
      this.currentCaseData = dataArrSpecific
      console.log(this.currentCaseData)

    })
  }

  getStates(){
    this.jhuStatesCountiesService.getStatesCounties(this.currentSelectedLocation.country).subscribe((data) =>{
      let statesDataList: any = data
      this.states = statesDataList
    })
  }

  getCounties(){
    console.log(this.currentSelectedLocation)
    this.jhuStatesCountiesService.getStatesCounties(this.currentSelectedLocation.country, this.currentSelectedLocation.state).subscribe((data) =>{
      let countiesList: any = data
      this.counties = countiesList
    })
  }

}


export interface jhuCasesData {
  "timeSeriesData": dayData[],
  "currentData": {
    "admin2": string,
    "province_state": string,
    "country_region": string,
    "last_update": string,
    "confirmed": string,
    "deaths": string
  },
  "minusOneDay": {
    "admin2": string,
    "province_state": string,
    "country_region": string,
    "last_update": string,
    "confirmed": string,
    "deaths": string
  },
  "minusTwoDay": {
    "admin2": string,
    "province_state": string,
    "country_region": string,
    "last_update": string,
    "confirmed": string,
    "deaths": string
  },
  "minusThreeDay": {
    "admin2": string,
    "province_state": string,
    "country_region": string,
    "last_update": string,
    "confirmed": string,
    "deaths": string
  },
  "minusFourDay": {
    "admin2": string,
    "province_state": string,
    "country_region": string,
    "last_update": string,
    "confirmed": string,
    "deaths": string
  },
  "minusFiveDay": {
    "admin2": string,
    "province_state": string,
    "country_region": string,
    "last_update": string,
    "confirmed": string,
    "deaths": string
  },
  "minusOneWeek": {
    "admin2": string,
    "province_state": string,
    "country_region": string,
    "last_update": string,
    "confirmed": string,
    "deaths": string
  },
  "minusTwoWeek": {
    "admin2": string,
    "province_state": string,
    "country_region": string,
    "last_update": string,
    "confirmed": string,
    "deaths": string
  },
  "twoWeekChange": number,
  "minusMonth": {
    "admin2": string,
    "province_state": string,
    "country_region": string,
    "last_update": string,
    "confirmed": string,
    "deaths": string
  },
  "monthChange": number,
  "dayChange": number,
  "weekChange": number
}

export interface dayData{
  "admin2": string,
  "province_state": string,
  "country_region": string,
  "last_update": string,
  "confirmed": string,
  "deaths": string
}