import { Component, OnInit } from '@angular/core';
import { ByDayStatsService } from './services/by-day-stats.service';

export interface link {
  label: string
  path: string    
}

@Component({
  selector: 'app-corona-virus-tracker',
  templateUrl: './corona-virus-tracker.component.html',
  styleUrls: ['./corona-virus-tracker.component.scss']
})
export class CoronaVirusTrackerComponent implements OnInit {
  navLinks: link[]


  constructor(private byDayStat: ByDayStatsService) {
    this.navLinks = [
      {label: 'JHU Cases', path: 'cases-jhu-table'},
      {label: 'JHU Chart', path: 'cases-jhu-chart'},
      {label: 'Total Cases Table', path: 'worldwide-table'},
      {label: 'Total Cases Chart', path: 'worldwide-chart'}
    ]
   }

  ngOnInit(): void {
    this.getDayStats()
  }

  getDayStats(){
    this.byDayStat.getStatsByDay().subscribe((data) =>{
      console.log(data)
    })
  }

}
