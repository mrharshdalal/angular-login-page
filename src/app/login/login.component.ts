import { Component ,OnInit  } from '@angular/core';
import {FormBuilder, FormGroup,Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  title = 'signup';
  otpForm!: FormGroup;

  // first:boolean=true;
  // second:boolean=false;
  // third:boolean=false;
  // fourth:boolean=false;


  ngOnInit() {
    this.otpForm = this._formBuilder.group({
      otp: ['', Validators.required] // 'otp' is the form control name
    });
  }

  onOtpChange(event:any){
    console.log(event)
  }
  // step1()
  // {
  //   this.second=true
  //   this.first=false
  // }

  // step2()
  // {
  //   this.second=false
  //   this.third=true
  // }
  // step3()
  // {
  //   this.third=false
  //   this.fourth=true
  // }


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
 
  isLinear = true
  constructor(private _formBuilder: FormBuilder) {}

  goToNext(){
    // this.step_id.next();
  }
}
