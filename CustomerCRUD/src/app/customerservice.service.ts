import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})


export class CustomerserviceService {

  uri = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) { }

  addCustomer(data) {
    return this.http.post(`${this.uri}/add`, data, httpOptions);
  }

  getCustomers() {
    return this.http.get(`${this.uri}/getall`, httpOptions);
  }

  getCustomer(id: any){
    const url = `${this.uri}/${id}`;
    return this.http.get(url, httpOptions);
  }

  postCustomer(data){
    return this.http.post(`${this.uri}`, data, httpOptions);
  }

  updateCustomer(id: number, data){
    const url = `${this.uri}/${id}`;
    return this.http.put(url, data, httpOptions);
  }

  deleteCustomer(id: number){
    const url = `${this.uri}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
