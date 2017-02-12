import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { InvoiceService } from './invoice.service';
import { Invoice } from './invoice';

@Component({
  selector: 'invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  title: string;
  toDate = new Date();
  fromDate:Date = new Date();
  discount:number=0;
  dateFormat = require('dateformat'); 
  invoice: Invoice; 
  
  constructor(private _invoiceService: InvoiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    
     this.updateFromDate(); 
     this.updateToDate(); 
  }
  updateFromDate(){
    this.fromDate = this.dateFormat(this.fromDate, "mm/dd/yyyy");
  }

  updateToDate(){
    this.toDate = this.dateFormat(this.toDate, "mm/dd/yyyy");
  }
  updateDiscount(newDiscount:number){
    this.discount = newDiscount;
  }
  canSave = true;
  onClickCanSave() {
    this.canSave = !this.canSave;
    console.log(this.canSave);
  } 

  getInvoice(){
    this.route.params
    .switchMap((params: Params) => this._invoiceService.getInvoiceById(+params['id']))
    .subscribe( invoice => this.invoice = invoice);
    console.log ("JSON.stringify(this.invoice) = "+JSON.stringify(this.invoice));
  }
}
