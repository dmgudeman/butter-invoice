import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Company } from '../company/company';
import { Item } from './item';
import { Items } from './items';


@Injectable()
export class ItemsService {
  companies:Company[];
  items:Item[];
 
  
  constructor(private ITEMS:Items) {
    this.items=ITEMS.items;

  }

  ngOnInit () {
    
  }
getItems():Promise<Item[]>{
   return Promise.resolve(this.items);
}

getItem(id:number){
  return Promise.resolve(this.items[id]);
}

setItem(item:Item){
  return Promise.resolve(this.items.push(item));
}
}
   
   