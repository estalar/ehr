import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {dataService} from './dataService'
import {ipfsData} from './data.type'
@Component({
  selector: 'app-patientdata',
  templateUrl: './patientdata.component.html',
  styleUrls: ['./patientdata.component.css']
})
export class PatientdataComponent implements OnInit {
  ipfsHash : ipfsData
  constructor(private requestService:dataService) { }

  ngOnInit() {
  }
  addDiagnosisData(data){
    this.requestService.getdata(data).subscribe((ipfsHash:ipfsData)=>{
      this.ipfsHash=ipfsHash
      for(data in this.ipfsHash){
        console.log(data)
      }
    })
  }
  
}
