import { IMyOptions, IMyDateRangeModel }  from 'mydaterangepicker';
import { Component, OnInit }              from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InvoiceService }                 from './invoice.service';
import { Invoice }                        from './invoice';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  private myDateRangePickerOptions: IMyOptions = {
        dateFormat: 'mm/dd/yyyy',
        
        inline: false,
        selectionTxtFontSize: '15px',
        
    };
  private newDate = new Date();
  
  private newYear = this.newDate.getFullYear();
  private newDay = this.newDate.getUTCDate();
  private newMonth = this.newDate.getMonth() + 1;

private model: Object = {beginDate: {year: this.newYear, month: this.newMonth, day: this.newDay},
                             endDate: {year: this.newYear, month: this.newMonth, day: this.newDay }};
  
  private title: string;
  private fromDate: string;
  private toDate: string;
  private discountAmount: number;
  private description: string;
  private dateFormat = require('dateformat');
  private invoice: Invoice;

  constructor(private _invoiceService: InvoiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getInvoice();
    console.log(this.newDate);
    console.log(this.newDate.getFullYear());
    console.log( this.newMonth);
    console.log(this.newDay);
  }
  // dateRangeChanged callback function called when the user apply the date range. This is
    // mandatory callback in this option. There are also optional inputFieldChanged and
    // calendarViewChanged callbacks.
  onDateRangeChanged(event: IMyDateRangeModel) {
        // event properties are: event.beginDate, event.endDate, event.formatted,
        // event.beginEpoc and event.endEpoc
    }
  updateFromDate() {
    this.fromDate = this.dateFormat(this.fromDate, "mm/dd/yyyy");
  }

  updateToDate() {
    this.toDate = this.dateFormat(this.toDate, "mm/dd/yyyy");
  }
  updateDiscountAmount(newDiscountAmount: number) {
    this.discountAmount = newDiscountAmount;
  }
  canSave = true;
  onClickCanSave() {
    this.canSave = !this.canSave;
  }

  getInvoice() {
    this.route.params
      .switchMap((params: Params) => this._invoiceService.getInvoiceById(+params['id']))
      .subscribe(invoice => {
        this.invoice = invoice;
        this.title = this.invoice.ivTitle;
        this.fromDate = this.invoice.ivFromDate;
        this.toDate = this.invoice.ivToDate;
        this.discountAmount = this.invoice.ivDiscountAmount;
        this.description = this.invoice.ivDescription;
        return this.invoice;
      });
  }
  setClasses() {

    console.log("this.invoice.ivTitle " + this.invoice.ivTitle);
  }
}
