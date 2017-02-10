import { Item } from '../item/item';
export class Invoice  {
    id?: number;
    ivTitle: string;
    ivFromDate: string;
    ivToDate: string;
    ivDiscountPercent: number;
    ivDiscountAmount: number;
    ivDescription: string;
    ivItems: Item[];
    constructor(id: number, ivTitle: string, ivFromDate: string, ivToDate: string,
                ivDiscountPercent:number, ivDiscountAmount:number, ivDescription: string, 
                ivItems: Item[]) {
        if (id) {
            this.id = id;
        }
        this.ivTitle = ivTitle;
        this.ivFromDate= ivFromDate;
        this.ivToDate=ivToDate;
        this.ivDiscountPercent;
        this.ivDiscountAmount;
        this.ivDescription;
        this.ivItems = ivItems;
    }
}