import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-patientdata',
  templateUrl: './patientdata.component.html',
  styleUrls: ['./patientdata.component.css']
})
export class PatientdataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addDiagnosisData(data){
    console.log(data)
  }
}
