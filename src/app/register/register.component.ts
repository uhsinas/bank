import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../database/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {




//form group
registerForm = this.formBuilder.group({

  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

})

  constructor( private formBuilder:FormBuilder,private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  
  register(){
    
    var acno=this.registerForm.value.acno
    var uname=this.registerForm.value.uname
    var pswd=this.registerForm.value.pswd
  


   
    if(this.registerForm.valid){

      const result=this.dataservice.register(acno,uname,pswd)
  
      if(result){
      
       alert('Register successful')
       
   
   
       this.router.navigateByUrl('')
   
      }
      else{
       
       alert('User already exist!! Please Log in')
      }

    }
    else{
      alert('Invalid form')
    }
    

   
    }
 
}
