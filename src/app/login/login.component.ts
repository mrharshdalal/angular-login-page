import { Component } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'signup';
  first:boolean=true;
  second:boolean=false;
  third:boolean=false;
  fourth:boolean=false;

  onOtpChange(event:any){

  }
  step1()
  {
    this.second=true
    this.first=false
  }

  step2()
  {
    this.second=false
    this.third=true
  }
  step3()
  {
    this.third=false
    this.fourth=true
  }
}
