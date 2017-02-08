import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client.service';
import { CompanyService } from './company/company.service';


import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './company/companies.component';
import { NewItemComponent } from './new-item/new-item.component';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { ItemComponent } from './item/item.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home-app', pathMatch: 'full'},
  { path: 'home-app', component: HomeComponent },
  { path: 'app-new-item', component: NewItemComponent },
  // { path: 'client',      component: ClientComponent },
  // {
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HomeComponent,
    CompaniesComponent,
    NewItemComponent,
    ItemComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    TabsModule.forRoot(),
   
  ],
  providers: [
    ClientService,
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
