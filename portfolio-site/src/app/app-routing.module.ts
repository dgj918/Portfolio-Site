import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadacheTrackerComponent } from './apps/headache-tracker/headache-tracker.component';
import { IntensityByDateComponent } from './apps/headache-tracker/intensity-by-date/intensity-by-date.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'headache', component: HeadacheTrackerComponent},
  { path: 'intensity', component: IntensityByDateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
