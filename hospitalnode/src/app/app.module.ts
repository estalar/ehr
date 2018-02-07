import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { PatientdataComponent } from './patientdata/patientdata.component';

import { routes } from './routes'

import {dataService} from './patientdata/dataService'

@NgModule({
  declarations: [
    AppComponent,
    PatientdataComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
