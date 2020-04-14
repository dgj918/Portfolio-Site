import { Component, OnInit, ViewChild } from '@angular/core';
import { ByDayStatsService } from '../services/by-day-stats.service';
import { pluck } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface byDayStats {
  date: string,
  confirmed: number,
  deaths: number,
  recovered: number
}

@Component({
  selector: 'app-covid19-table',
  templateUrl: './covid19-table.component.html',
  styleUrls: ['./covid19-table.component.scss']
})
export class Covid19TableComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['date', 'confirmed', 'deaths', 'recovered'];
  dataSource = new MatTableDataSource([]);

  constructor(private byDayStateServ: ByDayStatsService) { }

  ngOnInit(): void {
    this.getTableData()
  }

  getTableData(){
    this.byDayStateServ.getStatsByDay().pipe(
      pluck('US')
    ).subscribe((data) => {
      let byDayData: any = data
      this.dataSource = byDayData
      this.dataSource.sort = this.sort
    })
  }

}
