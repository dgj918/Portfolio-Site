import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeadachesService } from './services/headaches.service';
import { DataSource } from '@angular/cdk/table';
import { map } from 'rxjs/operators';

export interface HeadacheType {
  intensity: number;
  date: string;
  trigger: string;
  medicine: string;
}

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
          element['recordID'] = element['recordID']
          element['date_and_time'] = element['date_and_time'].replace(/\s/g, "T")
          element['intensity'] = element['intensity']
          element['headache_trigger'] = element['headache_trigger']
          element['medicine'] = element['medicine']
          return element
        }) 
      })
    )
    .subscribe((data) => {
      let headacheData: any = data
      this.dataSource = headacheData
    })
  }

  updateTableData($event){
    this.headacheSev.getHeadaches()
    .pipe(
      map(val => {
        let valArr: any = val
        return valArr.map(element =>{
          element['recordID'] = element['recordID']
          element['date_and_time'] = element['date_and_time'].replace(/\s/g, "T")
          element['intensity'] = element['intensity']
          element['headache_trigger'] = element['headache_trigger']
          element['medicine'] = element['medicine']
          return element
        }) 
      })
    )
    .subscribe((data) => {
      let headacheData: any = data
      this.dataSource = headacheData
    })
  }

}
