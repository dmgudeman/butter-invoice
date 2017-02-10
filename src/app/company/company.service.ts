import { Company } from './company';
import { Injectable } from '@angular/core';

@Injectable()
export class CompanyService {
    companies: Company[] = [
        { name: "Exxon", color: "green", hourly: 250 },
        { name: "Texaco", color: "red", hourly: 225 },
        { name: "Sinclair", color: "brown", hourly: 200 },
        { name: "Shell", color: "yellow", hourly: 200 },
        { name: "Arco", color: "blue", hourly: 225 },
        { name: "Valero", color: "purple", hourly: 230 }
    ];

    // getCompanies(): Promise<Company[]> {
    //     return Promise.resolve(this.companies);
    // };

    getCompanies() {
         return this.companies;
    }
    
    getCompany(id:number) {
        return this.companies[id];
    }
}