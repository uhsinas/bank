import { ApplicationRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../database/data.service';

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
  
//form group
loginForm = this.formBuilder.group({

 
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

})




  constructor(private formBuilder:FormBuilder,private router:Router,private dataservice:DataService) { }

  ngOnInit(): void {
  }


//user defined function

acnochange(event:any){
  this.acno=(event.target.value)

  
}
   

pswdchange(event:any){
  this.pswd=(event.target.value)
 
}


 login()
 {
   //fetch acno
   var acno=this.loginForm.value.acno

   //fetch pswd
   var pswd=this.loginForm.value.pswd

   if(this.loginForm.valid){
    const result = this.dataservice.login(acno,pswd)
 if(result)
 {

  alert('Log in successful')

  //navigation

  this.router.navigateByUrl('dashboard')
}
else

{
  alert('Invalid Form')
}
    
   }

   

 
    }
}



