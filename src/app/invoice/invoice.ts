import { Item } from '../item/item';
export class Invoice  {
    
    ivTitle: string;
    ivFromDate: string;
    ivToDate: string;
    ivDiscountPercent: number;
    ivDiscountAmount: number;
    ivDescription: string;
    ivItems: Item[];
    id?: number;
    ivCoId?:number;
    ivUid?: number;

    constructor(ivTitle: string, ivFromDate: string,                   ivToDate: string,
                ivDiscountPercent:number, ivDiscountAmount:number, ivDescription: string, 
                ivItems: Item[], id?:number, ivCoId?:number, ivUid?: number, ) {
        
        this.ivTitle = ivTitle;
        this.ivFromDate= ivFromDate;
        this.ivToDate=ivToDate;
        this.ivDiscountPercent;
        this.ivDiscountAmount;
        this.ivDescription;
        this.ivItems = ivItems;
        if(id){
            this.id = id
        };
        if(ivCoId){
            this.ivCoId= ivCoId;
        };
        if (ivUid) {
            this.id = ivUid
        };
    }
}