import { Company } from '../company/company';

export class Item {
    id?: number;
    // company: Company;
    // date: Date;
    // hours: number;
    // hourly: number;
    // description: string;
    constructor(id: number,
        public date: Date,
        public hours: number,
        public hourly: number,
        public description: string) {
        if (id) {
            this.id = id;
        }
    }

}
