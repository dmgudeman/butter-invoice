import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CompanyService } from '../company/company.service';
import { Company } from '../company/company';
@Injectable()


export class ItemsService {
  companies:Company[];
  co_name: string;

  constructor(private _companyService:CompanyService) {}

  ngOnInit () {
    
  }

getCompanies(): void {
  this._companyService.getCompanies().then(companies => this.companies = companies)
}

}



  

   
   