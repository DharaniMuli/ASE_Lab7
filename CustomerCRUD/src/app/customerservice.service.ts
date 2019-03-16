import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  uri = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) { }

  addCustomer(customer_id, customer_name, customer_emailId) {
    const obj = {
      customer_id: customer_id,
      customer_name: customer_name,
      customer_emailId: customer_emailId
    };
    console.log(obj);
    return this.http.post(`${this.uri}/add`, obj);
  }
}
