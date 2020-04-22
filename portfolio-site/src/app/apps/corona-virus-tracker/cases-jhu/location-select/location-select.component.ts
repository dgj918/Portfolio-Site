import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StatesCountiesJhuService } from '../../services/states-counties-jhu.service';

export interface selectedLocation {
  country: string;
  state: string; 
  county: string;
}

@Component({
  selector: 'app-location-select',
  templateUrl: './location-select.component.html',
  styleUrls: ['./location-select.component.scss']
})
export class LocationSelectComponent implements OnInit {
  @Output("getCases") getCases: EventEmitter<any> = new EventEmitter()
  locationSelectForm: FormGroup;
  countries: string[];
  states: string[];
  counties: string[];
  selectedCountry: string;
  selectedState: string;
  selectedCounty: string;
  currentSelectedLocation: selectedLocation

  constructor(private fb: FormBuilder,
    private jhuStatesCountiesService: StatesCountiesJhuService) {
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
    this.locationSelectForm = this.fb.group({
      country: ['US', Validators.required],
      state: ['Texas', Validators.required],
      county: ['Harris', Validators.required],
    });

    this.currentSelectedLocation.country = 'US'
    this.currentSelectedLocation.state = 'Texas'
    this.currentSelectedLocation.county = 'Harris'

    this.locationSelectForm.get('state').valueChanges.subscribe((data) =>{
      this.selectedState = data.state
      this.selectedCounty = data.county
      this.currentSelectedLocation.country = data.country
      this.currentSelectedLocation.state = data.state
      this.currentSelectedLocation.county = data.county
      this.getCounties()
      this.getUpdatedData()
    })

    this.getStates()
  }

  getStates(){
    this.jhuStatesCountiesService.getStatesCounties('US').subscribe((data) =>{
      let statesDataList: any = data
      this.states = statesDataList
    })
  }

  getCounties(){
    let stateSelect = this.locationSelectForm.value.state
    
    this.jhuStatesCountiesService.getStatesCounties('US', stateSelect).subscribe((data) =>{
      let countiesList: any = data
      this.counties = countiesList
    })
  }

  getUpdatedData(){
    this.getCases.emit()
  }

}
