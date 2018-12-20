import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';
@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
 submitStatus = false;
  constructor() { }
  custtypes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
model = new Customer('Ashok', 'Chennai',  12345, 'adh@gmail.com', 1);
  ngOnInit() {
  }
   onSubmit(): void {
      this.submitStatus = true;
      console.log('Form submitted***********');
  }
}
