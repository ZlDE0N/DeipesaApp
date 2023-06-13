import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product-register',
  templateUrl: './form-product-register.component.html',
  styleUrls: ['./form-product-register.component.css']
})
export class FormProductRegisterComponent {
  registerForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOninit(): void {
    this.registerForm = this.initForm();
  }


  onPatchValue(): void {
    this.registerForm.patchValue({ name: '' });
  }

  onSubmit(): void {
    console.log("Form -> ", this.registerForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      id: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.minLength(1)]],
    })
  }
}
