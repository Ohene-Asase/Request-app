import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { TripComponent } from './trip/trip.component';
import { BookedComponent } from './booked/booked.component';
import { DriversComponent } from './drivers/drivers.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
 {path : '', component : LoginComponent},

  
  {path:'home',  component : HomeComponent,
children: [

  {path:'overview', component:OverviewComponent},
  {path: 'trip', component:TripComponent},
  {path:'booked', component:BookedComponent},
  {path:'drivers', component:DriversComponent},
  {path:'schedule', component:ScheduleComponent},
  {path:'settings', component:SettingsComponent},
  {path:'', redirectTo: '/overview', pathMatch: 'full'}
]










},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
 
  
  
  
  
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
