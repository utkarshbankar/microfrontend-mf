import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyDynamicRemoteComponent } from './lazy-dynamic-remote.component';


@NgModule({
  declarations: [
    LazyDynamicRemoteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LazyDynamicRemoteModule { 
   resolveComponent(){
    return LazyDynamicRemoteComponent;
  }
}
