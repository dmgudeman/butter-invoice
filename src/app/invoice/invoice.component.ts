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
  ivTitle: string;
  toDate = new Date();
  fromDate:Date = new Date();
  discount:number=0;
  dateFormat = require('dateformat'); 
  invoice: Invoice; 
 
  
  constructor(private _invoiceService: InvoiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getInvoice();
    console.log ("OnInit JSON.stringify(this.invoice) = "+JSON.stringify(this.invoice));
   
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
    .subscribe( invoicex => {this.invoice = invoicex;
                            console.log("invoicex " + JSON.stringify(invoicex));
    console.log ("JSON.stringify(this.invoice)= "+JSON.stringify(this.invoice));
    this.ivTitle = this.invoice.ivTitle;
    return this.invoice;
    
  });
  
}

printInvoice(method){
  console.log("nethod " + JSON.stringify(this.invoice));
}
setClasses() {
    // let red: boolean = (company.color === 'red');
    // let green = (company.color === 'green');
    // let blue = (company.color === 'blue');
    // let brown = (company.color === 'brown');
    // let yellow = (company.color === 'yellow');
    // let purple = (company.color === 'purple');

    // let classes = {
    //   red: red,
    //   green: green,
    //   blue: blue,
    //   brown: brown,
    //   yellow: yellow,
    //   purple: purple
    // };
    // return classes
  this.printInvoice(" in submitted ");
  console.log("this.invoice.ivTitle " +this.invoice.ivTitle);
}
  
}
// ngOnInit() {
//      this.route.params.subscribe(params =>{
//      this.hourly=params['hourly'];
//      this.companyName=params['companyName'];
//      this.uId = params['uId'];

//      console.log ("params" + params['hourly'])
//      console.log ("this.hourly " + this.hourly);
//     //  return this.hourly;
//    })
   
//     console.log("this.hourly" + this.hourly);
//   }