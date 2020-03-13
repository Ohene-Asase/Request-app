import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatTabsModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatMenuModule, MatTableModule, MatTable, MatPaginatorModule, MatSortModule, MatDialog, MatDialogModule, MatNativeDateModule, MatChipsModule, MatSlideToggleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NameComponent } from './name--/name--.component';
import { OverviewComponent } from './overview/overview.component';
import { Routes } from '@angular/router';
import { TripComponent } from './trip/trip.component';
import { BookedComponent } from './booked/booked.component';
import { DriversComponent } from './drivers/drivers.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SettingsComponent } from './settings/settings.component';
import { MydashComponent } from './mydash/mydash.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IgxTimePickerModule } from 'igniteui-angular';
import { DeformComponent } from './deform/deform.component';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DashComponent } from './dash/dash.component';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CarsComponent } from './cars/cars.component';
import { AddComponent } from './add/add.component';
import { TryComponent } from './try/try.component';


//I keep the new line
/*const appRoutes: Routes = [

{path:'', component:HomeComponent},
{path:'overview', component:OverviewComponent}
]*/

//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MyNavComponent,
    NameComponent,
    OverviewComponent,
    TripComponent,
    BookedComponent,
    DriversComponent,
    ScheduleComponent,
    SettingsComponent,
    MydashComponent,
    DeformComponent,
    LineChartComponent,
    DashComponent,
    CarsComponent,
    AddComponent,
    TryComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    IgxTimePickerModule,
    ChartsModule,
    CommonModule,
    MatSelectModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    
  

    /* RouterModule.forRoot(appRoutes)*/
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [DeformComponent,
                    AddComponent
] 
                   
  
})
export class AppModule {
}
