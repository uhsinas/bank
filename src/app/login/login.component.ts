import { ApplicationRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

//property/

header="welcome to Our Bank"
accplaceholder="Enter Your Account Number"
//intake acno from
acno=""

pswd=""

//database
database:any={

1000:{acno:1000,username:'Neer',password:1000,balance:5000 },
1001:{acno:1001,username:'Laisha',password:1001,balance:5000 },
1002:{acno:1002,username:'Vyom',password:1002,balance:5000 }


}


  constructor() { }

  ngOnInit(): void {
  }


//user defined function

acnochange(event:any){
  this.acno=(event.target.value)

  
}
   

pswdchange(event:any){
  this.pswd=(event.target.value)
 
}


login(){
  //fetch acno
  var acno=this.acno

  //fetch pswd
  var pswd=this.pswd

  let userdetails=this.database
  if(acno in userdetails){
    if(pswd==userdetails[acno]['password']){
      alert('Log in successful')
  }
  else{
    alert('Incorrect password')
  }
  }
  else{ 
    alert('user does not exist')
}
  
  }


}