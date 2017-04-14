import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LondonComponent } from './london/london.component';
import { TokyoModule } from './tokyo/tokyo.module';
import { ParisModule } from './paris/paris.module';
@NgModule({
  declarations: [
    AppComponent,
    LondonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TokyoModule,
    ParisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
