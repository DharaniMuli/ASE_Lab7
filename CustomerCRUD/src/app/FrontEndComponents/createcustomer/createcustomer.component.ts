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
    const data = {
      customer_id: this.customerID,
      customer_name: this.customerName,
      customer_emailId: this.customerEmailId
    };
    this.customerService.addCustomer(data)
      .subscribe(data => {
        window.location.reload();
      });
  }

  ngOnInit() {
  }

  clearValues() {
    this.customerID = null;
    this.customerEmailId = null ;
    this.customerName = null;
  }
}
