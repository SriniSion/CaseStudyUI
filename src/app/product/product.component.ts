import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {NgForm, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  form: FormGroup;
submitStatus = false;
  constructor() { }
  productypes = [' ', 'mobile', 'mobileaccesories', 'clothes'];
model = new Product('apple', 'mobile', 'srini', 12345, 'chennai', 'ssri@gmail.com', 25000, 2);
  ngOnInit() {
  }
   onSubmit(): void {
      this.submitStatus = true;
      console.log('Form submitted***********');
  }

}
