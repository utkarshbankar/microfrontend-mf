import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { RouterModule, Routes } from '@angular/router';

const flightRoutes: Routes = [
  {
    path:'',
    component:FlightsComponent
  }
]

@NgModule({
  declarations: [
    FlightsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(flightRoutes)  
  ]
})
export class FlightsModule { }
