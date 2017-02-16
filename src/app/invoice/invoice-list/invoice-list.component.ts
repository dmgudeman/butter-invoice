import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  constructor(private _invoiceService:InvoiceService) { }

  ngOnInit() {
  }

  makeAndAddInvoice(uId,coId){
    this._invoiceService.makeAndAddInvoice(uId,coId);
  }
  
}
