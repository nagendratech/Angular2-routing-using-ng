import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParisRoutingModule } from './paris-routing.module';
import { KirkeeComponent } from './kirkee/kirkee.component';
import { DapodiComponent } from './dapodi/dapodi.component';

@NgModule({
  imports: [
    CommonModule,
    ParisRoutingModule
  ],
  declarations: [KirkeeComponent, DapodiComponent]
})
export class ParisModule { }
