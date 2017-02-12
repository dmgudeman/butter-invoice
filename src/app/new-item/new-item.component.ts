import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  date = new Date();
  dateFormat = require('dateformat');
  fdate:Date = new Date();
  getHourly: Observable<number>
  hourly: number;
  companyName:string;
  uId:number;
  constructor(private route:ActivatedRoute) {
   }

  ngOnInit() {
     this.route.params.subscribe(params =>{
     this.hourly=params['hourly'];
     this.companyName=params['companyName'];
     this.uId = params['uId'];

     console.log ("params" + params['hourly'])
     console.log ("this.hourly " + this.hourly);
    //  return this.hourly;
   })
   
    console.log("this.hourly" + this.hourly);
  }
  
  updateDate(){
    this.fdate = this.dateFormat(this.fdate, "mm/dd/yyyy")
   
  }
  canSave = true;
  onClickCanSave() {
    this.canSave = !this.canSave;
    console.log(this.canSave);
  } 
}
