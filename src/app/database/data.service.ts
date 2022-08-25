import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//currentuser
  currentuser:any;

  //current acno
  currentacno:any;
  //database
database:any={

  1000:{acno:1000,username:'Neer',password:1000,balance:5000 ,transaction:[]},
  1001:{acno:1001,username:'Laisha',password:1001,balance:5000 ,transaction:[]},
  1002:{acno:1002,username:'Vyom',password:1002,balance:5000 ,transaction:[]}
  
  
  }
  

  constructor() { 
   this.getDetails()
   }

  //getdetails
   getDetails(){
if(localStorage.getItem('database')){
  this.database=JSON.parse(localStorage.getItem('database')||'')

}

    if(localStorage.getItem('currentuser')){
      this.currentuser=JSON.parse(localStorage.getItem('currentuser')||'')

    }
    if(localStorage.getItem('currentacno')){
      this.currentacno=JSON.parse(localStorage.getItem('currentacno')||'')
    }
    
   
   }

   //saveDetails
  saveDetails(){
    localStorage.setItem('database',JSON.stringify(this.database))
    if(this.currentuser){
      localStorage.setItem('currentuser',JSON.stringify(this.currentuser))
    }
    if(this.currentacno){
      localStorage.setItem('currentacno',JSON.stringify(this.currentacno))
    }
   }


  
  //register
  register(acno:any,username:any,password:any){
  
    let database=this.database

   if(acno in database){
      return false
    }
   else{
      database[acno]={
         acno,
         username,
         password,
         balance:0,
         transaction:[]
      }
      this.saveDetails()
       return true
    }
  }










    //login
  
   login(acno:any,pswd:any){
    
     let userdetails=this.database
     if(acno in userdetails){
       if(pswd==userdetails[acno]['password']){
        
        this.currentuser = userdetails[acno]['username']
        this.currentacno=acno
        this.saveDetails()
 return true

     }
 else{
       alert('Incorrect password')
       return false
     }
     }
     else{ 
            alert('user does not exist')
       return false
   }
   
     }
 
     //deposite
     deposit(acno: any, pswd: any,amt:any) {

      let userDetails = this.database
      const amount = parseInt(amt)
      if (acno in userDetails) {
        if (pswd == userDetails[acno].password) {
          userDetails[acno]['balance']+=amount
          userDetails[acno]['transaction'].push({
            type:'credit',
            amount

          })
          this.saveDetails()
          return userDetails[acno]['balance']
        }
        else {
          alert('Incorrect Password')
          return false
        }
      }
      else {
        alert("User doesn't exist")
        return false
      }
    }
//withdraw
    withdraw(acno: any, pswd: any,amt:any) {

      let userDetails = this.database
      const amount = parseInt(amt)
      if (acno in userDetails) {
        if (pswd == userDetails[acno].password) {

          if( userDetails[acno]['balance']>amount){
          userDetails[acno]['balance']-=amount
         
          userDetails[acno]['transaction'].push({
            type:'debit',
            amount
            
          })
          this.saveDetails()
          return userDetails[acno]['balance']
  
        }
        else{
          alert('Insufficient Balance')
          return false
        }
      }
        else {
          alert('Incorrect Password')
          return false
        }
      }
      else {
        alert("User doesn't exist")
        return false
      }
    }
    gettransaction(acno:any){
      return this.database[acno].transaction
    }
  }








  



