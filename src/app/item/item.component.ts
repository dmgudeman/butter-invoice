import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { Item } from './item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items:Item[];
  item:Item;
  constructor(private _itemsService:ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
      this._itemsService.getItems().then(items => this.items = items);
   }
  getItem(id:number){
    this._itemsService.getItem(id)
       .then(item => this.item = item)
       .catch(()=>console.log("ERROR fetching item"));
  }
  setItem(item:Item){
    this._itemsService.setItem(item)
        .then(items => this.items = items)
  }
} 