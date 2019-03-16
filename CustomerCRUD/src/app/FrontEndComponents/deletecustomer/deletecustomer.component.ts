import { Component, OnInit } from '@angular/core';
import {CustomerserviceService} from "../../customerservice.service";

@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.component.html',
  styleUrls: ['./deletecustomer.component.css']
})
export class DeletecustomerComponent implements OnInit {



  constructor(private customerService:CustomerserviceService) { }

  ngOnInit() {
  }



}
