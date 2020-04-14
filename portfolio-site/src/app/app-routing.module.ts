import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadacheTrackerComponent } from './apps/headache-tracker/headache-tracker.component';
import { IntensityByDateComponent } from './apps/headache-tracker/intensity-by-date/intensity-by-date.component';
import { CoronaVirusTrackerComponent } from './apps/corona-virus-tracker/corona-virus-tracker.component';
import { Covid19ChartComponent } from './apps/corona-virus-tracker/covid19-chart/covid19-chart.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'headache', component: HeadacheTrackerComponent},
  { path: 'intensity', component: IntensityByDateComponent},
  { path: 'COVID19', component: CoronaVirusTrackerComponent},
  { path: 'COVID19-chart', component: Covid19ChartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
