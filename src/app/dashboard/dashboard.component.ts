import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../database/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  //form group
depositForm = this.formBuilder.group({

 
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]

})

   //form group
withdrawForm = this.formBuilder.group({

 
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]

})
//currentuser
user:any;

  constructor(private formBuilder:FormBuilder, private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
    this.user=this.dataservice.currentuser
    if(!localStorage.getItem('currentacno')){
      alert('please log in')
      this.router.navigateByUrl('')
    }
  }

deposit(){
   //fetch acno
var acno=this.depositForm.value.acno

 //fetch pswd
  var pswd=this.depositForm.value.pswd

 //fetch amount
  var amount=this.depositForm.value.amount

if( this.depositForm.valid){
const result=this.dataservice.deposit(acno,pswd,amount)
if(result){
  alert(`${amount} depositted successfully and new balance is ${result}`)
}
}
 else{
 alert('Invalid Form')
 }
 }
  withdraw(){
   //fetch acno
  var acno=this.withdrawForm.value.acno

//  //fetch pswd
 var pswd=this.withdrawForm.value.pswd

//    //fetch amount
  var amount=this.withdrawForm.value.amount

if( this.withdrawForm.valid){
  const result=this.dataservice.withdraw(acno,pswd,amount)
  if(result){
    alert(`${amount} debitted successfully and new balance is ${result}`)
  }
 }
 else{
 alert('Invalid Form')
}
 }

 logout(){
  localStorage.removeItem('currentacno')
  localStorage.removeItem('currentuser')
  this.router.navigateByUrl('')
 }
 }
