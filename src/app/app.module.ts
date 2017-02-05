import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client.service';
import { CompanyService } from './company/company.service';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './company/companies.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home-app', component: HomeComponent },
  // { path: 'client',      component: ClientComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    NavbarComponent,
    HomeComponent,
    CompaniesComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ClientService,
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
