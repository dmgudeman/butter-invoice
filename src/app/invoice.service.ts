import { Injectable, OnInit } from '@angular/core';
import { Invoice } from './invoice';

@Injectable()
export class InvoiceService {
  invoice1 = new  Invoice();
  
  constructor() { }
  ngOnInit(){
     this.invoice1.co_name="Acme";
     this.invoice1.date=null;
     this.invoice1.hours=0;
     this.invoice1.hourly=250;
     this.invoice1.description='';
    

  }
}
