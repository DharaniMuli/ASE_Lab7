import { Component, OnInit } from '@angular/core';
import {CustomerserviceService} from "../../customerservice.service";

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  customerID : number;
  customerName: String;
  customerEmailId: String;

  constructor( private customerService:CustomerserviceService) { }
  addCustomer(){
    this.customerService.addCustomer(this.customerID,this.customerName,this.customerEmailId)
      .subscribe(data => {

      });

  }

  ngOnInit() {
  }

}
