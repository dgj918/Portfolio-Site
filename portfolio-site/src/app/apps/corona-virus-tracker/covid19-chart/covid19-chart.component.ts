import { Component, OnInit } from '@angular/core';
import { ByDayStatsService } from '../services/by-day-stats.service';
import { pluck } from 'rxjs/operators';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-covid19-chart',
  templateUrl: './covid19-chart.component.html',
  styleUrls: ['./covid19-chart.component.scss']
})
export class Covid19ChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [{data:[], label: 'Cases'}];
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

  constructor(private byDayStateServ: ByDayStatsService) { }

  ngOnInit(): void {
    this.getChartData()
  }

  getChartData(){
    this.byDayStateServ.getStatsByDay().pipe(
      pluck('US')
    ).subscribe((data) => {
      let byDayData: any = data
      console.log(byDayData)
      this.populateChart(byDayData)
    })
  }

  populateChart(chartData){
    console.log(chartData)
    let dateArr: string[] = []
    let casesArr: number[] = []
    let arrLen: number = chartData.length - 1
    
    chartData.forEach(element => {
      dateArr.push(element['date'])
      casesArr.push(element['confirmed'])
    });

    //dateArr.push(chartData[0]['date'])
    //casesArr.push(chartData[0]['confirmed'])
    console.log(chartData, casesArr, dateArr, arrLen)
    this.lineChartData = [{data: casesArr, label: 'Confirmed Cases'}]
    this.lineChartLabels = dateArr
  }

}
