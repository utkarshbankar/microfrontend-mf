import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestohomeComponent } from './restohome.component';

import { RouterModule, Routes } from '@angular/router';
 
const restoRoutes: Routes = [
  {
    path:'',
    component:RestohomeComponent
  }
]
@NgModule({
  declarations: [
    RestohomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(restoRoutes)
  ]
})
export class RestohomeModule { }
