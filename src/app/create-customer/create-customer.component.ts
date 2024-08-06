import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  createCustomerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
      this.createCustomerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required]
      })
  }

  createCustomer() {
    if (!this.createCustomerForm.invalid) {
      console.log(this.createCustomerForm.value);
    }
  }

}
