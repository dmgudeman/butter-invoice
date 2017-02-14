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
  fdate: Date = new Date();
  getHourly: Observable<number>
  hourly: number;
  companyName: string;
  coId: number;
  uId: number;
  canSave = true;
  
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
      this.hourly = params['hourly'];
      this.companyName = params['companyName'];
      this.coId = params['coId'];
      this.uId = params['uId'];
    })
  }

  updateDate() {
    this.fdate = this.dateFormat(this.fdate, "mm/dd/yyyy")
  }

 
  onClickCanSave() {
    this.canSave = !this.canSave;
  }
}
