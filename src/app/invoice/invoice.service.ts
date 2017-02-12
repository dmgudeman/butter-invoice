import { Invoice } from './invoice';
import { Item } from '../item/item';
export class InvoiceService {
    invoices: Invoice[];
    invoice: Invoice;
    ivTitle: string;
    ivFromDate: string;
    ivToDate: string;
    ivDiscountPercent: number;
    ivDiscountAmount: number;
    ivDescription: string;
    ivItems: Item[];
    id: number;
    ivUid: number;
    ivCoId: number;

    constructor () {
        this.invoices = [new Invoice('First Invoice', '02/01/2017', '03/01/2017',0,0,"This is it!",[
                new Item(505, new Date(), 5, 20, 'Baked and Iced cake'),
            ],1000 ,1,1),
            new Invoice('Second Invoice', '02/01/2017', '03/01/2017',0,0,"This is it!", [
                new Item(500, new Date(), 25, 18, 'Designed new company logo'),
                new Item(501, new Date(), 15, 20, 'Translated 4 documents'),
            ],1001, 1, 1),
            new Invoice( 'Third Invoice', '02/01/2017', '03/01/2017',0,0,"This is it!", [
                new Item(502, new Date(), 50, 18, 'Further Developed 2 ideas'),
                new Item(503, new Date(), 70, 18, 'Did face-painting at party'),
                new Item(504, new Date(), 30, 18, 'Submitted 10 initial ideas'),
            ],1002,1,1)
        ]
    }
    
    getInvoicesByUserId(userId: number): Promise<Invoice[]> {
        return Promise.resolve([
            new Invoice('First Invoice', '02/01/2017', '03/01/2017',0,0,"This is it!",[
                new Item(505, new Date(), 5, 20, 'Baked and Iced cake'),
            ],1000, 1, 1),
            new Invoice('Second Invoice', '02/01/2017', '03/01/2017',0,0,"This is it!", [
                new Item(500, new Date(), 25, 18, 'Designed new company logo'),
                new Item(501, new Date(), 15, 20, 'Translated 4 documents'),
            ],1001, 1,1),
            new Invoice( 'Third Invoice', '02/01/2017', '03/01/2017',0,0,"This is it!", [
                new Item(502, new Date(), 50, 18, 'Further Developed 2 ideas'),
                new Item(503, new Date(), 70, 18, 'Did face-painting at party'),
                new Item(504, new Date(), 30, 18, 'Submitted 10 initial ideas'),
            ],1002,1,1),
        ]);
    };
    getInvoiceById(invoiceId: number): Promise<Invoice> {
        const foundInvoice = [
            new Invoice('First Invoice', '02/01/2017', '03/01/2017',0,0,"This is it!", [
                new Item(505, new Date(), 5, 20, 'Baked and Iced cake'),
            ],1000, 1,1),
            new Invoice( 'Second Invoice', '02/01/2017', '03/01/2017',0,0,"This is it!", [
                new Item(500, new Date(), 25, 18, 'Designed new company logo'),
                new Item(501, new Date(), 15, 20, 'Translated 4 documents'),
            ],1001,1,1),
            new Invoice('Third Invoice', '02/01/2017', '03/01/2017',0,0,"This is it!", [
                new Item(502, new Date(), 50, 18, 'Further Developed 2 ideas'),
                new Item(503, new Date(), 70, 18, 'Did face-painting at party'),
                new Item(504, new Date(), 30, 18, 'Submitted 10 initial ideas'),
            ],1002, 1,1),
        ].find(invoice => invoice.id === invoiceId);
        return Promise.resolve(foundInvoice);
    };
    makeInvoice( ivUid?:number, ivCoId?:number ) 
                {
        let new_ivTitle = "new invoice";
        let new_ivFromDate ="2/17/2017";
        let new_ivToDate ="3/17/2017";
        let new_ivDiscountPercent = 25;
        let new_ivDiscountAmount = 0;
        let new_ivDescription="this is a new invoice"
        let new_ivItems = null;
       
        this.invoice.ivTitle = new_ivTitle;
        this.invoice.ivFromDate= new_ivFromDate;
        this.invoice.ivToDate=new_ivToDate;
        this.invoice.ivDiscountPercent=new_ivDiscountPercent;
        this.invoice.ivDiscountAmount=new_ivDiscountAmount;
        this.invoice.ivDescription=new_ivDescription;
        this.invoice.ivItems = new_ivItems;
        this.invoice.id = this.makeInvoiceId()
        this.invoice.ivUid ? ivUid : 1;
        this.invoice.ivCoId ? ivCoId: 2;

         return this.invoice;
       }

    makeInvoiceId(){
        let id:number;
        id = Math.floor(Math.random() * 10000);
        return id;
    }
}
