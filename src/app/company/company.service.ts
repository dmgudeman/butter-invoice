import {Company} from './company';

export class CompanyService {
    companies: any[] = [{name: "Exxon", color: "green"}, {name: "Texaco", color: "blue"}, {
        name: "Sinclair",
        color: "brown"
    }];

    getCompanies() {
        return this.companies;
    }

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