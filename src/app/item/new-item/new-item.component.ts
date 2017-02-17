import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IMyOptions, IMyDate, IMyDateModel} from 'mydatepicker';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css', './override.css']
})
export class NewItemComponent implements OnInit {
  private myDatePickerOptions: IMyOptions={
    dateFormat: 'mm/dd/yyyy',
    
  };
  private selDate: IMyDate = {year:0, month:0, day:0 };
  date = new Date();
  dateFormat = require('dateformat');

  getHourly: Observable<number>
  hourly: number;
  companyName: string;
  coId: number;
  uId: number;
  title: string;
  canSave = true;

  constructor(private route: ActivatedRoute) {
    let d: Date = new Date();
      this.selDate =  {year: d.getFullYear(), 
                      month: d.getMonth() + 1, 
                      day: d.getDate()};
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
      this.hourly = params['hourly'];
      this.companyName = params['companyName'];
      this.coId = params['coId'];
      this.uId = params['uId'];
      this.title = params['title'];
      
    })
  }

  onDateChanged(event: IMyDateModel){
}
  updateDate() {
    this.selDate = this.dateFormat(this.selDate, "mm/dd/yyyy")
  }

  onClickCanSave() {
    this.canSave = !this.canSave;
  }
}
