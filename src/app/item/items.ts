import { OnInit } from '@angular/core';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/company';
import { Item } from './item';


export class ITEMS implements OnInit {
   companies:Company[];
   item0:Item;
   item1:Item;
   item2:Item;

   constructor(private _companyService:CompanyService) {
      
   }

   ngOnInit() {
      this.item0.company = this.getCompanies()[0].name,
      this.item0.date = new Date(),
      this.item0.hours = 0,
      this.item0.hourly = this.getCompanies()[0].hourly,
      this.item0.description = '';

      this.item1.company = this.getCompanies()[1].name,
      this.item1.date = new Date(),
      this.item1.hours = 0,
      this.item1.hourly = this.getCompanies()[1].hourly,
      this.item1.description = '';
       
      this.item2.company = this.getCompanies()[2].name,
      this.item2.date = new Date(),
      this.item2.hours = 0,
      this.item2.hourly = this.getCompanies()[2].hourly,
      this.item2.description = '';
   }

getCompanies(): void {
  this._companyService.getCompanies().then(companies => this.companies = companies)
}
}