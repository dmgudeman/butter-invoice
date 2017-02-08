import { Company } from '../company/company';

export interface Item {
   company: Company;
   date: Date;
   hours: number;
   hourly: number;
   description: string;

}
