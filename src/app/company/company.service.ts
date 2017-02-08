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
    // getCompaniesMainList() {
    //     const companiesRaw = this.companies;
    //     console.log(companiesRaw);
    //     const companiesFormatted = [];
    //     for (let i = 0; i < companiesRaw.length; i += 2) {
    //         const row = [];
    //         row.push(companiesRaw[i]);
    //         if (i + 1 < companiesRaw.length) {
    //             row.push(companiesRaw[i + 1]);
    //         }
    //         companiesFormatted.push(row);
    //     }
    //     console.log(companiesFormatted);
    //     return companiesFormatted;
    // }

}