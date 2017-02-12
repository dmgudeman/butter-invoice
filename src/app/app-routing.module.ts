import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './company/companies.component';
import { NewItemComponent } from './new-item/new-item.component';
import { ItemComponent } from './item/item.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BootexComponent } from './bootex/bootex.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home-app', pathMatch: 'full'},
  { path: 'home-app', component: HomeComponent },
  { path: 'new-item', component: NewItemComponent },
  { path: 'invoice/:id', component: InvoiceComponent },
  { path: 'invoice', component: InvoiceComponent },
  // { path: 'client',      component: ClientComponent },
  // {
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