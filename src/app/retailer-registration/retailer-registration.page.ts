import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RetailerCredentials } from '../model/retailer.credentials.model';
import { RetailerRegistrationService } from '../services/retailer.registration.service';

@Component({
  selector: 'app-retailer-registration',
  templateUrl: './retailer-registration.page.html',
  styleUrls: ['./retailer-registration.page.scss'],
})
export class RetailerRegistrationPage implements OnInit {

  retailerRegistrationForm : FormGroup;
  retailerCredentials: RetailerCredentials;

  constructor(private router: Router,
              private retailerRegistrationService: RetailerRegistrationService) { }

  ngOnInit() {
    this.retailerRegistrationForm = new FormGroup({
      mobileNumber : new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      otp: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      confirmPassword: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  submitRegistration(){
    console.log('Registration Form Details submitted:::', this.retailerRegistrationForm);
    this.saveRetailerCredentials();
    console.log('Retailer Registration Form::::', this.retailerRegistrationService.getRetailerRegistrationDetails());
    this.router.navigate(['retailer-registration/shop-details']);
  }

  private saveRetailerCredentials(){
    this.retailerCredentials = new RetailerCredentials();
    this.retailerCredentials.mobileNo = this.retailerRegistrationForm.value.mobileNumber;
    this.retailerCredentials.otp = this.retailerRegistrationForm.value.otp;
    this.retailerCredentials.password = this.retailerRegistrationForm.value.password;
    this.retailerCredentials.confirmPassword = this.retailerRegistrationForm.value.confirmPassword;
    this.retailerRegistrationService.storeRetailerCredentials(this.retailerCredentials);
  }

}
