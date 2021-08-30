import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

import { LiveListComponent } from './views/home/live-list/live-list.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    /* children: [
      {
        path: 'list', // child route path
        component: LiveListComponent // child route component that the router renders
      }
    ] */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
