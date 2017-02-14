import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { InvoiceService } from 'app/invoice/invoice.service';
import { Invoice } from 'app/invoice/invoice';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
class: any;
  companies: Company[];
  invoice: Invoice;
  company;
  id:number;
  name:string;
  color:string;
  hourly: number;

  constructor(
              private _companyService: CompanyService,
              private _invoiceService: InvoiceService,
              private router:Router,
              private route:ActivatedRoute) { };

  ngOnInit() {
    this.company = this.getCompany();
    console.log("this.companies = " + JSON.stringify(this.companies));
  }
  getCompanies(): Company[] {
    return this._companyService.getCompanies();
  }

  setColor(color) {
    

    
    return color
  }
  
  goToInvoice(company:Company) {
    let uId = 1;
    let coId = company.id;
    this.invoice = this._invoiceService.makeInvoice(uId,coId);
      console.log("company.component.goToInvoice " + JSON.stringify(this.invoice))
     this.router.navigate(['/invoice', this.invoice.id ]);

  }

  goToNewItem(company:Company){
    let hourly = company.hourly;
    let companyName = company.name;
    let uId =4
    console.log(hourly);
    this.router.navigate(['/new-item', {hourly: hourly, companyName:companyName, uId:uId }]);
  }
  getCompany(){

    this.route.params

    .switchMap((params: Params) => this._companyService.getCompanyById(+params['id']))
    .subscribe( companyx => { this.company = companyx;
                            console.log("companyx " + JSON.stringify(companyx));
    console.log ("JSON.stringify(this.company)= "+JSON.stringify(this.company));
    console.log("this.hourly" +this.hourly);
    console.log("this.color" + this.color);

    this.id = this.company.id;
    this.name = this.company.name;
    this.color = this.company.color;
    this.hourly = this.company.hourly;
    return this.company;

  });
  
}

}
