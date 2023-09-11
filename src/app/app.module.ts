import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureRoundPipe } from './pipes/temperature-round.pipe';
import { UnixTimestampPipe } from './pipes/unix-timestamp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureRoundPipe,
    UnixTimestampPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
