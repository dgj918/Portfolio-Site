import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { HeadachesService } from '../../services/headaches.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-intensity-by-date-chart',
  templateUrl: './intensity-by-date-chart.component.html',
  styleUrls: ['./intensity-by-date-chart.component.scss']
})
export class IntensityByDateChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [{data: [0], label: 'Intensity'}];
  public lineChartLabels: Label[] = [''];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: false,
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
  
  constructor(private headacheSev: HeadachesService) {
    this.getChartData()
   }

  ngOnInit(): void {
  }

  getChartData(){
    let valArr: any[] = []
    let dateArr: string[] = []
    let intArr: number[] = []

    this.headacheSev.getHeadaches()
    .pipe(
      map(val => {
        let valArr: any = val
        return valArr.map(element =>{
          dateArr.push(element['date_and_time'])
          intArr.push(element['intensity'])
          return dateArr
        }) 
      })
    )
    .subscribe((chartData) => {
      valArr.push(dateArr)
      valArr.push(intArr)
      console.log(chartData, valArr)
      this.lineChartData = [{data: valArr[1], label: 'Intensity'}]
      this.lineChartLabels = valArr[0]
    })
  }

}
