import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CasesJhuService } from '../../services/cases-jhu.service';
import { StatesCountiesJhuService } from '../../services/states-counties-jhu.service';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as moment from 'moment'
import { CaseChangeByDayService } from '../../services/case-change-by-day.service';

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

export interface selectedLocation {
  country: string;
  state: string; 
  county: string;
}

export interface location {
  country: string
  state: string
  county: string
}

@Component({
  selector: 'app-jhu-cases-chart',
  templateUrl: './jhu-cases-chart.component.html',
  styleUrls: ['./jhu-cases-chart.component.scss']
})
export class JhuCasesChartComponent implements OnInit {
  currentCaseData: jhuCasesData

  currentSelectedLocationObj: location

  locationSelectFormJHUChart: FormGroup;
  countries: string[];
  states: string[];
  counties: string[];
  selectedCountry: string;
  selectedState: string;
  selectedCounty: string;
  currentSelectedLocation: selectedLocation

  public lineChartData: ChartDataSets[] = [{data: [0], label: 'Confirmed Cases'}];
  public lineChartLabels: Label[] = [''];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
    annotation: {
    },  
  };
  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';



  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartColors: Color[] = [{
    backgroundColor: 'rgba(18, 30, 246,0.2)',
    borderColor: 'rgba(77,83,96,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  }]
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Confirmed Cases' },
  ];



  constructor(private fb: FormBuilder,
    private jhuCasesServ: CasesJhuService,
    private jhuStatesCountiesService: StatesCountiesJhuService,
    private caseChangeByDayService: CaseChangeByDayService) { 
    this.currentSelectedLocation = {
      country: 'US',
      state: 'Texas',
      county: 'Harris'
    }
    this.getStates()
    this.getCases()
    this.getDayCaseChange()
  }

  ngOnInit(): void {
    this.locationSelectFormJHUChart = this.fb.group({
      country: ['US', Validators.required],
      state: ['', Validators.required],
      county: ['', Validators.required],
    });


    this.checkForStateChanges()
    this.checkForCountyChanges()
  }

  getDayCaseChange(){
    this.caseChangeByDayService.getDayCaseChange(this.currentSelectedLocation.country, this.currentSelectedLocation.state, this.currentSelectedLocation.county).subscribe((data) =>{
      let caseChangeForDay: ChartDataSets[] = []
      let caseByDayArr: number[] = []
      let caseChangeDate: string[] = []
      let dataArr: any = data['dailyChanges']

      dataArr.forEach(element => {
        caseByDayArr.push(element['cases'])
        caseChangeDate.push(moment(element['date']).format('M-D-YY'))
      });
      caseChangeForDay = [{'data': caseByDayArr, 'label': 'Confirmed Cases'}]

      this.barChartData = caseChangeForDay
      this.barChartLabels = caseChangeDate
    })
  }

  checkForStateChanges(){
    this.locationSelectFormJHUChart.get('state').valueChanges.subscribe(state =>{
      this.currentSelectedLocation.state = state
      this.currentSelectedLocation.county = null
      this.getCases()
      this.getDayCaseChange()
      this.getCounties()  
    })
  }

  checkForCountyChanges(){
    this.locationSelectFormJHUChart.get('county').valueChanges.subscribe(county =>{
      this.currentSelectedLocation.county = county
      this.getCases()
      this.getDayCaseChange()
    })
  }

  getCases(){
    this.jhuCasesServ.getJhuCases(this.currentSelectedLocation.country, this.currentSelectedLocation.state, this.currentSelectedLocation.county).subscribe((data: jhuCasesData) =>{
      let casesArr: casesForADay[] = data.timeSeriesData
      let cases: number[] = []
      let caseDates: string[] = []
      casesArr.forEach(element => {
        cases.push(parseInt(element.confirmed,10))
        caseDates.push(moment(element.last_update).format('M-D-YY'))
      });
      this.lineChartData = [{data: cases, label: 'Confirmed Cases'}]
      this.lineChartLabels = caseDates
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
