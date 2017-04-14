import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DapodiComponent } from './dapodi/dapodi.component';
import { KirkeeComponent } from './kirkee/kirkee.component';
const routes: Routes = [
  {path: 'dapodi',component:DapodiComponent},
  {path: '',component:KirkeeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParisRoutingModule { }
