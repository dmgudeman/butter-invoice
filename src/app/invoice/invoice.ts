import { Item } from '../item/item';
export class Invoice  {
    id?: number;
    title: string;
    items: Item[];
    constructor(id: number, title: string, items: Item[]) {
        if (id) {
            this.id = id;
        }
        this.title = title;
        this.items = items;
    }
}