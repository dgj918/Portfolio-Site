import { Component, OnInit } from '@angular/core';
import { HeadachesService } from './services/headaches.service';
import { DataSource } from '@angular/cdk/table';
import { map } from 'rxjs/operators';

export interface HeadacheType {
  intensity: number;
  date: string;
  trigger: string;
  medicine: string;
}

const ELEMENT_DATA: HeadacheType[] = [
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
  displayedColumns: string[] = ['date_and_time', 'intensity', 'headache_trigger', 'medicine'];
  dataSource: DataSource<HeadacheType>;
  
  constructor(private headacheSev: HeadachesService) { }

  ngOnInit() {
    this.headacheSev.getHeadaches()
    .pipe(
      map(val => {
        let valArr: any = val
        return valArr.map(element =>{
          element['date_and_time'] = element['date_and_time'].replace(/\s/g, "T")
          element['intensity'] = element['intensity']
          element['headache_trigger'] = element['headache_trigger']
          element['medicine'] = element['medicine']
          return element
        }) 
      })
    )
    .subscribe((data) => {
      console.log(data)
      let headacheData: any = data
      this.dataSource = headacheData
    })
  }

  updateTableData($event){
    console.log($event)
    this.headacheSev.getHeadaches()
    .pipe(
      map(val => {
        val['date_and_time'] = val['date_and_time'].replace(/\s/g, "T")
      })
    )
    .subscribe((data) => {
      let headacheData: any = data
      this.dataSource = headacheData
    })
  }

}
