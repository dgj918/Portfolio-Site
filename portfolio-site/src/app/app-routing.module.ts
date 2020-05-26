import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadacheTrackerComponent } from './apps/headache-tracker/headache-tracker.component';
import { IntensityByDateComponent } from './apps/headache-tracker/intensity-by-date/intensity-by-date.component';
import { CoronaVirusTrackerComponent } from './apps/corona-virus-tracker/corona-virus-tracker.component';
import { Covid19ChartComponent } from './apps/corona-virus-tracker/covid19-chart/covid19-chart.component';
import { JhuCasesTableComponent } from './apps/corona-virus-tracker/cases-jhu/jhu-cases-table/jhu-cases-table.component';
import { JhuCasesChartComponent } from './apps/corona-virus-tracker/cases-jhu/jhu-cases-chart/jhu-cases-chart.component';
import { Covid19TableComponent } from './apps/corona-virus-tracker/covid19-table/covid19-table.component';
import { ResumeComponent } from './resume/resume.component';
import { AppsMenuComponent } from './apps-menu/apps-menu.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'apps', component: AppsMenuComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'headache', component: HeadacheTrackerComponent},
  { path: 'intensity', component: IntensityByDateComponent},
  { path: 'COVID19', component: CoronaVirusTrackerComponent,
    children: [
      {path: 'cases-jhu-table', component: JhuCasesTableComponent},
      {path: 'cases-jhu-chart', component: JhuCasesChartComponent},
      {path: 'worldwide-chart', component: Covid19ChartComponent},
      {path: 'worldwide-table', component: Covid19TableComponent}
    ]
  },
  { path: 'COVID19-chart', component: Covid19ChartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
