import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  intensity: number;
  date: string;
  trigger: string;
  medicine: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: 'Jan 1', intensity: 6, trigger: 'Call', medicine: 'IB Profin'},
  {date: 'Jan 2', intensity: 7, trigger: 'Wine', medicine: 'IB Profin'},
  {date: 'Jan 3', intensity: 4, trigger: 'Call', medicine: 'IB Profin'},
  {date: 'Jan 4', intensity: 3, trigger: 'Night Shift', medicine: 'IB Profin'},
  {date: 'Jan 5', intensity: 5, trigger: 'Workout', medicine: 'IB Profin'},
  {date: 'Jan 6', intensity: 6, trigger: 'Call', medicine: 'IB Profin'},
  {date: 'Jan 7', intensity: 8, trigger: 'Night Shift', medicine: 'IB Profin'},
  {date: 'Jan 8', intensity: 3, trigger: 'Wine', medicine: 'IB Profin'},
  {date: 'Jan 9', intensity: 2, trigger: 'Call', medicine: 'IB Profin'},
  {date: 'Jan 10', intensity: 5, trigger: 'Call', medicine: 'IB Profin'},
  {date: 'Jan 11', intensity: 5, trigger: 'Call', medicine: 'IB Profin'},
  {date: 'Jan 12', intensity: 5, trigger: 'Call', medicine: 'IB Profin'},
  {date: 'Jan 13', intensity: 5, trigger: 'Call', medicine: 'IB Profin'},
  {date: 'Jan 14', intensity: 5, trigger: 'Call', medicine: 'IB Profin'},
];
@Component({
  selector: 'app-headache-tracker',
  templateUrl: './headache-tracker.component.html',
  styleUrls: ['./headache-tracker.component.scss']
})
export class HeadacheTrackerComponent implements OnInit {
  displayedColumns: string[] = ['date', 'intensity', 'trigger', 'medicine'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit() {
  }

}
