import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Invoice } from './invoice';
import { Item } from '../item/item';

@Injectable()
export class InvoiceService {

    id: number;
    invoice: Invoice;
    invoices = [new Invoice('First Invoice', '02/01/2017', '03/01/2017', 0, 0, "This is it!", [
        new Item(505, new Date(), 5, 20, 'Baked and Iced cake', 3),
    ], 1, 1, 1000),
    new Invoice('Second Invoice', '02/01/2017', '03/01/2017', 0, 0, "This is it!", [
        new Item(500, new Date(), 25, 18, 'Designed new company logo', 2),
        new Item(501, new Date(), 15, 20, 'Translated 4 documents', 2),
        new Item(506, new Date(), 50, 20, 'roughed out the back end', 2)
    ], 1, 1, 1001),
    new Invoice('Third Invoice', '02/01/2017', '03/01/2017', 0, 0, "This is it!", [
        new Item(502, new Date(), 50, 18, 'Further Developed 2 ideas', 1),
        new Item(503, new Date(), 70, 18, 'Did face-painting at party', 1),
        new Item(504, new Date(), 30, 18, 'Submitted 10 initial ideas', 1),
    ], 1, 1, 1002)
    ]
    constructor(private _http: Http) { }
    ngOnInit() {
        this.invoices = this.getInvoices();
    }


    getInvoicesByUserId(userId: number): Invoice {
        let invoice = this.getInvoices().find(item => (item.id === userId));
        return invoice;
    }

    getInvoiceById(invoiceId: number): Promise<Invoice> {
        let foundInvoice = this.getInvoices().find(item => (item.id === invoiceId));
        console.log("getInvoiceById invoiceId = " + invoiceId);
        console.log("getInvoiceById this.invoices.length = " + this.invoices.length)
        console.log("getInvoiceById JSON.stringify(foundInvoice) = " + JSON.stringify(foundInvoice));
        return Promise.resolve(foundInvoice);
    };
    makeAndAddInvoice(uId: number, coId: number) {


        let new_ivTitle = "new invoice";
        let new_ivFromDate = "2/17/2017";
        let new_ivToDate = "3/17/2017";
        let new_ivDiscountPercent = 25;
        let new_ivDiscountAmount = 15;
        let new_ivDescription = "this is a new invoice"
        let new_ivItems = null;
        let new_ivCoId = coId;
        console.log("makInvoice.new_ivCoId = " + new_ivCoId);
        let new_ivUid = uId;
        console.log("makeInvoice.new_ivUid = " + new_ivUid);

        this.invoice = new Invoice(
            new_ivTitle,
            new_ivFromDate,
            new_ivToDate,
            new_ivDiscountPercent,
            new_ivDiscountAmount,
            new_ivDescription,
            new_ivItems,
            new_ivCoId,
            new_ivUid,


        );
        console.log("this.invoices.length = " + this.invoices.length)
        this.addInvoice(this.invoice);
        console.log("this.invoices.length = " + this.invoices.length)
        this.invoices.push(this.invoice);
        return this.invoice;
    }


    addInvoice(invoice: Invoice) {
        this.invoices.push(invoice);
    }
    getInvoices() {
        return this.invoices;
    }
    /******************** using http request *************************************/
    private invoicesUrl = 'app/shared/invoices';
    getInvoices2(): Observable<Invoice[]> {
        return this._http.get(this.invoicesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }












}
