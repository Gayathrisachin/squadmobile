import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {
  otpForm:FormGroup
  isSubmitted:boolean=false
  invalidLogin:boolean=false
  forgotPasswordFormErrors:any
  success:boolean=false
  constructor(private fb:FormBuilder,private router:Router) { }
  



  ngOnInit() {
    this.otpForm=this.fb.group({
  phone:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
  //   this.forgotPasswordFormErrors = {
  //     email: 'gayatri@gmail.com'
  // }
  }
  
 
  verify(){
  
    this.isSubmitted = true;
        if(this.otpForm.invalid){
          return;
        }
        if(this.otpForm.controls.phone.value === '8073250834') {
        // this.authService.logIn(this.authForm.value);
        this.success=true
        // this.router.navigate(['mark-attendance']);
    }
    else{
      this.invalidLogin=true;
    }
    }
}
