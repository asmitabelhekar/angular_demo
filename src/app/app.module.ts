import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructureComponent } from './structure/structure.component';
import { ShowcustomerComponent } from './showcustomer/showcustomer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatIconModule, MatListModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material'
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PurchasrorderComponent } from './purchasrorder/purchasrorder.component';
import { GrnComponent } from './grn/grn.component';
import { SalesComponent } from './sales/sales.component';
import {DropdownModule} from 'primeng/dropdown';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponent,
    StructureComponent,
    ShowcustomerComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    PurchasrorderComponent,
    GrnComponent,
    SalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    SelectButtonModule,
    MatNativeDateModule,
    MatTabsModule,
    MatFormFieldModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
