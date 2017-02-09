import { Company } from './company';
import { Injectable } from '@angular/core';

@Injectable()
export class CompanyService {
    companies: Company[] = [
        { id: 1, name: "Exxon", color: "green", hourly: 250 },
        { id: 2, name: "Texaco", color: "blue", hourly: 225 },
        { id: 3, name: "Sinclair", color: "brown", hourly: 200 },
        { id: 4, name: "Shell", color: "red", hourly: 200 }
    ];

    getCompanies(): Promise<Company[]> {
        return Promise.resolve(this.companies);
    };
}