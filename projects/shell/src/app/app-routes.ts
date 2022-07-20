import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const allRoutes: Routes = [
  {
    path:'',
    component:AppComponent,
    pathMatch:'full'
  },
  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: "http://localhost:4300/remoteEntry.js",
        exposedModule: './Module',
      }).then((m) => { return m.FlightsModule})
    },
    {
      path: 'resto',
      loadChildren: () =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: "http://localhost:4400/remoteEntry.js",
          exposedModule: './Module',
        }).then((m) => { return m.RestohomeModule})
      }
      // {
  //   path:'flights',
  //   loadChildren: () => import('tarvel/Module').then( (m) => { return m.FlightsModule}).catch(err => console.log(err))
  // }
  // {
  //   path: 'flights',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'manifest',
  //       remoteName: 'tarvel',
  //       exposedModule: './Module',
  //     }).then((m) => { return m.FlightsModule}).catch( err => console.log('Oh no!', err) ),
  // }

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
