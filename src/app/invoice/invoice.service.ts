import { Invoice } from './invoice';
import { Item } from '../item/item';
export class InvoiceService {
    getInvoicesByUserId(userId: number): Promise<Invoice[]> {
        return Promise.resolve([
            new Invoice(1000, 'First Invoice', [
                new Item(505, new Date(), 5, 20, 'Baked and Iced cake'),
            ]),
            new Invoice(1001, 'Second Invoice', [
                new Item(500, new Date(), 25, 18, 'Designed new company logo'),
                new Item(501, new Date(), 15, 20, 'Translated 4 documents'),
            ]),
            new Invoice(1002, 'Third Invoice', [
                new Item(502, new Date(), 50, 18, 'Further Developed 2 ideas'),
                new Item(503, new Date(), 70, 18, 'Did face-painting at party'),
                new Item(504, new Date(), 30, 18, 'Submitted 10 initial ideas'),
            ]),
        ]);
    };
    getInvoiceById(invoiceId: number): Promise<Invoice> {
        const foundInvoice = [
            new Invoice(1000, 'First Invoice', [
                new Item(505, new Date(), 5, 20, 'Baked and Iced cake'),
            ]),
            new Invoice(1001, 'Second Invoice', [
                new Item(500, new Date(), 25, 18, 'Designed new company logo'),
                new Item(501, new Date(), 15, 20, 'Translated 4 documents'),
            ]),
            new Invoice(1002, 'Third Invoice', [
                new Item(502, new Date(), 50, 18, 'Further Developed 2 ideas'),
                new Item(503, new Date(), 70, 18, 'Did face-painting at party'),
                new Item(504, new Date(), 30, 18, 'Submitted 10 initial ideas'),
            ]),
        ].find(invoice => invoice.id === invoiceId);
        return Promise.resolve(foundInvoice);
    };
}
