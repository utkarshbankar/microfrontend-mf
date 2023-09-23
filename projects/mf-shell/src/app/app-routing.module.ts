import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from './utils/federation-utils';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'remote', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'remote',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'remoteApp',
        remoteEntry: 'http://localhost:4300/remoteEntry.js',
        exposedModule: 'remoteAppModule',
      }).then(m => m.LazyRemoteModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
