import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company';
import { InvoiceService } from '../invoice/invoice.service';
import { Invoice } from '../invoice/invoice';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'companies',
  templateUrl: 'companies.component.html',
  styleUrls: ['companies.component.css']
})
export class CompaniesComponent implements OnInit {
  class: any;
  companies: Company[];
  invoice: Invoice;

  constructor(
              private _companyService: CompanyService,
              private _invoiceService: InvoiceService,
              private router:Router) { };

  ngOnInit() {
    this.companies = this.getCompanies();
    console.log("this.companies = " + JSON.stringify(this.companies));
  }
  getCompanies(): Company[] {
    return this._companyService.getCompanies();
  }

  setClasses(company: Company) {
    let red: boolean = (company.color === 'red');
    let green = (company.color === 'green');
    let blue = (company.color === 'blue');
    let brown = (company.color === 'brown');
    let yellow = (company.color === 'yellow');
    let purple = (company.color === 'purple');

    let classes = {
      red: red,
      green: green,
      blue: blue,
      brown: brown,
      yellow: yellow,
      purple: purple
    };
    return classes
  }
  
  goToInvoice(company:Company) {
    let uId = 1;
    let coId = company.id;
    this.invoice = this._invoiceService.makeInvoice(uId,coId);
      console.log( JSON.stringify(this.invoice))
     this.router.navigate(['/invoice', this.invoice.id ]);

  }
}


