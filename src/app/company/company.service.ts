import { Company } from './company';
import { Injectable } from '@angular/core';

@Injectable()
export class CompanyService {
    companies: Company[] = [
        { name: "Exxon", color: "green", hourly: 250 },
        { name: "Texaco", color: "red", hourly: 225 },
        { name: "Sinclair", color: "brown", hourly: 200 },
        { name: "Shell", color: "yellow", hourly: 200 },
        { name: "Arco", color: "blue", hourly: 225 }
    ];

    // getCompanies(): Promise<Company[]> {
    //     return Promise.resolve(this.companies);
    // };

    getCompanies() {
         return this.companies;
    }
 
//      getCompaniesMainList() {
//          const companiesRaw = this.companies;
//          console.log("service comapniesRaw " + companiesRaw);
//          const companiesFormatted = [];
//          for (let i = 0; i < companiesRaw.length; i += 2) {
//              const row = [];
//              console.log("companiesRaw[i] " +companiesRaw[i].name)
//              row.push(companiesRaw[i]);
//              if (i + 1 < companiesRaw.length) {
//                  console.log("companiesRaw[i +1] " +companiesRaw[i + 1].name)
//                  row.push(companiesRaw[i + 1]);
//              }
//              companiesFormatted.push(row);
//          }
//          console.log( "In the service companiesFormatted " + companiesFormatted.length);
//          return companiesFormatted;
// }
}
/*
companies: any[] = [{name: "Exxon", color: "limegreen"}, {name: "Texaco", color: "dodgerblue"}, {
 -  		 +        name: "Sinclair",
 -  getCompanies() {		 +        color: "saddlebrown"
 -     return this.companies;		 +    }];
 -  }		 +
 +    getCompanies() {
 +        return this.companies;
 +    }
 +
 +    getCompaniesMainList() {
 +        const companiesRaw = this.companies;
 +        console.log(companiesRaw);
 +        const companiesFormatted = [];
 +        for (let i = 0; i < companiesRaw.length; i += 2) {
 +            const row = [];
 +            row.push(companiesRaw[i]);
 +            if (i + 1 < companiesRaw.length) {
 +                row.push(companiesRaw[i + 1]);
 +            }
 +            companiesFormatted.push(row);
 +        }
 +        console.log(companiesFormatted);
 +        return companiesFormatted;
 +    }*/