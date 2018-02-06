import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { PatientdataComponent } from './patientdata/patientdata.component';

import { routes } from './routes'

@NgModule({
  declarations: [
    AppComponent,
    PatientdataComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
