import {Company} from './company';

export class CompanyService {
    companies: Company[] = [
        {name: "Exxon", color: "green", hourly: 250}, 
        {name: "Texaco", color: "blue", hourly: 225}, 
        {name: "Sinclair",color: "brown", hourly: 200}
        ];

    
   getCompanies(): Promise<Company[]> {
      return Promise.resolve(this.companies);
   };
}