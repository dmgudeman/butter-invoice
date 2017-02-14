import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client.service';
import { CompanyService } from './company/company.service';
import { InvoiceService } from './invoice/invoice.service';

import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './company/companies/companies.component';

import { NewItemComponent } from './new-item/new-item.component';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { ItemComponent } from './item/item.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BootexComponent } from './bootex/bootex.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { NewCompanyComponent } from './company/new-company/new-company.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    HomeComponent,
    CompaniesComponent,
    NewItemComponent,
    ItemComponent,
    InvoiceComponent,
    BootexComponent,
    CompanyDetailsComponent,
    NewCompanyComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule.forRoot(),
    FormsModule,
    HttpModule,
    TabsModule.forRoot()
  ],
  providers: [
    ClientService,
    CompanyService,
    InvoiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
