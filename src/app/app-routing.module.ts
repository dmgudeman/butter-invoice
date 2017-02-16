import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './company/companies/companies.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { NewCompanyComponent } from './company/new-company/new-company.component';
import { NewItemComponent } from './item/new-item/new-item.component';
import { ItemComponent } from './item/item/item.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BootexComponent } from './bootex/bootex.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home-app', pathMatch: 'full'},
  { path: 'home-app', component: HomeComponent },
  { path: 'new-item', component: NewItemComponent },
  { path: 'invoice/:id', component: InvoiceComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'new-company', component:NewCompanyComponent },
  { path: 'company-details', component:CompanyDetailsComponent },
  { path: 'invoice-list', component:InvoiceListComponent},
  { path: '**', component: HomeComponent }
];


@NgModule({
   imports: [
    RouterModule.forRoot(appRoutes)
   ],
   exports: [
    RouterModule
   ],
})

export class AppRoutingModule {}