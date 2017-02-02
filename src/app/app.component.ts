import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app works with bootstrap!';
  practice;
  constructor(private clientService: ClientService) {}

  ngOnInit () {
    this.practice = this.clientService.getClients();
  }

}
