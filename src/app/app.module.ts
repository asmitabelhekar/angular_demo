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
import { MatCardModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatIconModule, MatListModule, MatTabsModule} from '@angular/material'
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { PurchasrorderComponent } from './purchasrorder/purchasrorder.component';
import { GrnComponent } from './grn/grn.component';
import { SalesComponent } from './sales/sales.component';
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
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
