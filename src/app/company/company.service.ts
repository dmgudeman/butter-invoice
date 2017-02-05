import { Company } from './company';

export class CompanyService {
  companies: any[] = [{name: "Exxon", color:"limegreen"}, {name: "Texaco", color:"dodgerblue"}, {name:"Sinclair", color:"saddlebrown"}];
  
  getCompanies() {
     return this.companies;
  }

}