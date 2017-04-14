import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LondonComponent } from './london/london.component';
import { TokyoComponent } from './tokyo/tokyo.component';
import { ParisModule } from './paris/paris.module';
import { KirkeeComponent } from './paris/kirkee/kirkee.component';
const routes: Routes = [
  {
    path: '',
    children: []
  },
  {path: 'london',component:LondonComponent},
  {path: 'tokyo',component:TokyoComponent},
  {path: 'paris',children:[
   { path: '', component: KirkeeComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
