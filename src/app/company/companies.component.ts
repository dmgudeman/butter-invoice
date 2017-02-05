import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company';

@Component({
  selector: 'companies',
  templateUrl: 'companies.component.html',
  styleUrls: ['companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];


  constructor(private companyService: CompanyService){};

  ngOnInit() {
    this.companies = this.companyService.getCompanies();
    console.log(this.companies);
  }

}
