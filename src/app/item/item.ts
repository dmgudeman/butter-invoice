import { Company } from '../company/company';

export class Item {
   id?:number;
   company: Company;
   date: Date;
   hours: number;
   hourly: number;
   description: string;

}
