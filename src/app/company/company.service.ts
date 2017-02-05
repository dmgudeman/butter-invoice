import { Company } from './company';

export class CompanyService {
  companies: any[] = [{name: "Exxon", color:"tan"}, {name: "Texaco", color:"red"}, {name:"Sinclair", color:"green"}];

  
  getCompanies() {
     return this.companies;
  }

}