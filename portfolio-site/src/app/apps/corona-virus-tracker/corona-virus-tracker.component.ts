import { Component, OnInit } from '@angular/core';
import { ByDayStatsService } from './services/by-day-stats.service';

@Component({
  selector: 'app-corona-virus-tracker',
  templateUrl: './corona-virus-tracker.component.html',
  styleUrls: ['./corona-virus-tracker.component.scss']
})
export class CoronaVirusTrackerComponent implements OnInit {

  constructor(private byDayStat: ByDayStatsService) { }

  ngOnInit(): void {
    this.getDayStats()
  }

  getDayStats(){
    this.byDayStat.getStatsByDay().subscribe((data) =>{
      console.log(data)
    })
  }

}
