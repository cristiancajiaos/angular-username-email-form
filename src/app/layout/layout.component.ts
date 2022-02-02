import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public myForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor() { }

  ngOnInit(): void {
  }

  public isFieldInvalid(field: string): boolean {
    let control = this.myForm.controls[field];
    return control.touched && control.invalid;
  }

  public isFieldRequiredError(field: string): boolean {
    let control = this.myForm.controls[field];
    return control.touched && control.errors['required'];
  }

  public isFieldEmailError(): boolean {
    let control = this.myForm.controls['email'];
    return control.touched && control.errors['email'];
  }

  public onSubmit(): void {
    console.log(this.myForm.value);
  }

}
