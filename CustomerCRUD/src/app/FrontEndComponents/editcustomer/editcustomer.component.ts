import { Component, OnInit } from '@angular/core';
import {CustomerserviceService} from "../../customerservice.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {

  id:any;

  customer = null;
  constructor(private customerService:CustomerserviceService, private route: ActivatedRoute, private router: Router) { }


  private sub: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.customerService.getCustomer(this.id).subscribe(data=>{
        this.customer = data;
      })
    });
  }

  updateCustomer(id){
    const data = {
      customer_id: this.customer.customer_id,
      customer_name: this.customer.customer_name,
      customer_emailId: this.customer.customer_emailId
    };
    this.customerService.updateCustomer(id, data)
      .subscribe(data => {
        this.router.navigate([''])
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
