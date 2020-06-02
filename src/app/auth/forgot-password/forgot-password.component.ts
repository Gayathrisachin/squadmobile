import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm:FormGroup
  isSubmitted:boolean=false
  invalidLogin:boolean=false
  forgotPasswordFormErrors:any
  success:boolean=false
  constructor(private fb:FormBuilder,private router:Router) { }
  



  ngOnInit() {
    this.forgotPasswordForm=this.fb.group({
  email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    })
  //   this.forgotPasswordFormErrors = {
  //     email: 'gayatri@gmail.com'
  // }
  }
  
 
  logIn(){
  
    this.isSubmitted = true;
        if(this.forgotPasswordForm.invalid){
          return;
        }
        if(this.forgotPasswordForm.controls.email.value == 'admin@gmail.com') {
        // this.authService.logIn(this.authForm.value);
        this.success=true
        // this.router.navigate(['mark-attendance']);
    }
    else{
      this.invalidLogin=true;
    }
    }
}
