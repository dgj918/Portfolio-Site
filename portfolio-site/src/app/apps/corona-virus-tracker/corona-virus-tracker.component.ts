import { Component, OnInit } from '@angular/core';
import { ByDayStatsService } from './services/by-day-stats.service';
import { NavBarTitleService } from 'src/app/services/nav-bar-title.service';

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


  constructor(private byDayStat: ByDayStatsService,
    private navBarTitleServ: NavBarTitleService) {
    this.navLinks = [
      {label: 'JHU Cases', path: 'cases-jhu-table'},
      {label: 'JHU Chart', path: 'cases-jhu-chart'},
      {label: 'Total Cases Table', path: 'worldwide-table'},
      {label: 'Total Cases Chart', path: 'worldwide-chart'}
    ]
   }

  ngOnInit(): void {
    this.navBarTitleServ.changeTitle('COVID-19 Tracker')
    this.getDayStats()
  }

  getDayStats(){
    this.byDayStat.getStatsByDay().subscribe((data) =>{
      console.log(data)
    })
  }

}
