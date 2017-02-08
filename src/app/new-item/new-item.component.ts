import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'ng2-bootstrap/tabs';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  date = new Date();
  dateFormat = require('dateformat');
  fdate:Date;
  constructor() {
   }

  ngOnInit() {
    
    this.fdate = this.dateFormat(this.date, "mm/dd/yyyy");
  }
  
  updateDate(){

    this.fdate = this.dateFormat(this.fdate, "mm/dd/yyyy")
   
  }

}
