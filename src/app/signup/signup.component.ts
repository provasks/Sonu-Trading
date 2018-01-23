import { User } from './../shared/models/user';
import { NgModule, Component, Pipe, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Form } from '@angular/forms/src/directives/form_interface';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  constructor(){

  }
  user: User;
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;


  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  signup(){
    this.user = this.myform.value;
  }
  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }
}
