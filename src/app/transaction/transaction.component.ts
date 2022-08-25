import { Component, OnInit } from '@angular/core';
import { DataService } from '../database/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  acno:any;
  transaction:any
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    //get the current acno
    this.acno =this.dataservice.currentacno
    this.transaction =this.dataservice.gettransaction(this.acno)
    console.log(this.transaction);
    
  }

}
