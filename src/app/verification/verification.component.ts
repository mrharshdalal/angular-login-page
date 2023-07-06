import { Component } from '@angular/core';


interface Business {
  value: string;
  viewValue: string;
}

interface Firm {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
  
})
export class VerificationComponent {
  onlineStore:boolean = true
  ownerIdentity:boolean = false
  businessProof:boolean = false
  bankDetails:boolean = false


  changeHandle(value:any){
    this.selectedValue=value.target.value
  }
  tab1click(){
    this.onlineStore=true;
    this.ownerIdentity = false;
    this.businessProof = false;
    this.bankDetails = false;
  }
  tab2click(){
    this.onlineStore=false;
    this.ownerIdentity = true;
    this.businessProof = false;
    this.bankDetails = false;
  }
  tab3click(){
    this.onlineStore=false;
    this.ownerIdentity = false;
    this.businessProof = true;
    this.bankDetails = false;
  }
  tab4click(){
    this.onlineStore=false;
    this.ownerIdentity = false;
    this.businessProof = false;
    this.bankDetails = true;
  }

  business: Business[] = [
    {value: '1', viewValue: 'Wholesale'},
    {value: '2', viewValue: 'Retail'},
    {value: '3', viewValue: 'Manufacturing'},
  ];
  firm: Firm[] = [
    {value: '1', viewValue: 'Proprietorship'},
    {value: '2', viewValue: 'Partnership'},
    {value: '3', viewValue: 'Private Limited'},
    {value: '4', viewValue: 'Limited Liability Partnership'},
  ];
  selectedValue: string=this.firm[0].value;
}
