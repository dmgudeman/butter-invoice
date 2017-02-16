import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Invoice } from '../invoice/invoice';
import { Item } from '../item/item';



@Injectable()
export class InMemoryDataService implements InMemoryDbService  {


  //   createDb() {
  //   let heroes = [
  //     { id: 1, name: 'Windstorm' },
  //     { id: 2, name: 'Bombasto' },
  //     { id: 3, name: 'Magneta' },
  //     { id: 4, name: 'Tornado' }
  //   ];
  //   return {heroes};
  // }

  createDb() {
  
    
    let invoices = [ 
            new Invoice('First Invoice', '02/01/2017', '03/01/2017',0,0,"This is it!",[
                new Item(505, new Date(), 5, 20, 'Baked and Iced cake',3),
                    ] ,1,1,1000), 
            
            new Invoice('Second Invoice', '02/01/2017', '03/01/2017',0,0,"This is it!", [
                new Item(500, new Date(), 25, 18, 'Designed new company logo',2),
                new Item(501, new Date(), 15, 20, 'Translated 4 documents',2),
                new Item(506, new Date(), 50, 20, 'roughed out the back end',2)
                    ], 1, 1,1001), 
            new Invoice('First Invoice', '02/01/2017', '03/01/2017',0,0,"This is it!",[
                new Item(505, new Date(), 5, 20, 'Baked and Iced cake',3),
                    ] ,1,1,1000)
        ];
        return {invoices};
  }

}
