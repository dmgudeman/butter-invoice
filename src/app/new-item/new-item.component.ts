import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'ng2-bootstrap/tabs';
@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public alertMe(): void {
    setTimeout(function (): void {
      alert('You\'ve selected the alert tab!');
    });
  }

}
