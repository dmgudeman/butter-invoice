import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company';
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


  constructor(private companyService: CompanyService,
              private router:Router) { };

  ngOnInit() {
    this.companies = this.getCompanies();
  }
  getCompanies(): Company[] {
    return this.companyService.getCompanies();
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
    let coName = company.name;
    let coHourly = company.hourly;
    this.router.navigate(['invoice', {uId: uId, coId: coId, coName: coName, coHourly: coHourly, }])

  }

  goToNewItem(company:Company){
    let hourly = company.hourly;
    let companyName = company.name;
    let uId =4
    console.log(hourly);
    this.router.navigate(['/new-item', {hourly: hourly, companyName:companyName, uId:uId }]);
  }
}


