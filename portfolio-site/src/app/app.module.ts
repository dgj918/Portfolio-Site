import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadacheTrackerComponent } from './apps/headache-tracker/headache-tracker.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/top-nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BottomNavComponent, DialogOverviewExampleDialog } from './apps/headache-tracker/bottom-nav/bottom-nav.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { IntensityByDateComponent } from './apps/headache-tracker/intensity-by-date/intensity-by-date.component';
import { IntensityByDateChartComponent } from './apps/headache-tracker/intensity-by-date/intensity-by-date-chart/intensity-by-date-chart.component';
import { CoronaVirusTrackerComponent } from './apps/corona-virus-tracker/corona-virus-tracker.component';
import { Covid19BottomNavComponent } from './apps/corona-virus-tracker/covid19-bottom-nav/covid19-bottom-nav.component';
import { Covid19TableComponent } from './apps/corona-virus-tracker/covid19-table/covid19-table.component';
import { MatSortModule } from '@angular/material/sort';
import { Covid19ChartComponent } from './apps/corona-virus-tracker/covid19-chart/covid19-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadacheTrackerComponent,
    HomeComponent,
    NavComponent,
    BottomNavComponent,
    DialogOverviewExampleDialog,
    IntensityByDateComponent,
    IntensityByDateChartComponent,
    CoronaVirusTrackerComponent,
    Covid19BottomNavComponent,
    Covid19TableComponent,
    Covid19ChartComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    ChartsModule,
    MatSortModule
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
