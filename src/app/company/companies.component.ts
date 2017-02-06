import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company';

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
    this.companies = this.companyService.getCompanies();
    console.log(this.companies);
  }
  // setClasses(){
  //   let classes = {
  //     red: true
  //   }
  //   console.log("classes = " + JSON.stringify(classes));
  //   return classes;
  // }

setClasses(company:Company) {
  let red:boolean = (company.color==='red');
  let green = (company.color==='green');
  let blue = (company.color==='blue');
  
  console.log(company.color,red,green,blue);
  let classes={
    red: red,
    green: green,
    blue: blue
  };
  console.log("classes = " + JSON.stringify(classes));
  return classes
  

  }


}
  

