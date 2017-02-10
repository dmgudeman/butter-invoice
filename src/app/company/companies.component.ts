import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'companies',
  templateUrl: 'companies.component.html',
  styleUrls: ['companies.component.css']
})
export class CompaniesComponent implements OnInit {
  class:any;
  companies: Company[];


  constructor(private companyService: CompanyService){};

  ngOnInit() {
    this.companies = this.getCompanies();
    console.log("ngOnInit = " + this.companies.length);
  }
  getCompanies():Company[] {
  return this.companyService.getCompanies();
}
  
setClasses(company:Company) {
  let red:boolean = (company.color==='red');
  let green = (company.color==='green');
  let blue = (company.color==='blue');
  let brown = (company.color==='brown');
  let yellow = (company.color==='yellow');
  let purple = (company.color==='purple');

  console.log(company.color,red,green,blue);
  let classes={
    red: red,
    green: green,
    blue: blue,
    brown: brown,
    yellow: yellow,
    purple: purple
  };
  console.log("classes = " + JSON.stringify(classes));
  return classes
  

  }
}
  

