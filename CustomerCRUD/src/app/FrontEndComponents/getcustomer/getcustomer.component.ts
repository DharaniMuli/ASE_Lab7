import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import {CustomerserviceService} from "../../customerservice.service";

@Component({
  selector: 'app-getcustomer',
  templateUrl: './getcustomer.component.html',
  styleUrls: ['./getcustomer.component.css']
})
export class GetcustomerComponent implements OnInit {

  customers: any;
  constructor(private customerService:CustomerserviceService, private router: Router) { }

  ngOnInit() {

    this.customerService.getCustomers().subscribe(data=>{
      this.customers= data;
      console.log(this.customers);
    })
  }
  deleteCustomer(id) {
    this.customers = this.customers.filter(function(obj){
      return obj._id != id ;
    });
    this.customerService.deleteCustomer(id).subscribe(data=>{
      console.log(data)
    });
  }
  editCustomer(id){
      this.router.navigate(['/edit', id])
  }
}
