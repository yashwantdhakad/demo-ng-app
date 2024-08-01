import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  createProductForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createProductForm = this.fb.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  createProduct() {
    console.log('Form input fields:', this.createProductForm.value);
  }
}
