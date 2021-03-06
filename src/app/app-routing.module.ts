import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StructureComponent } from './structure/structure.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ShowcustomerComponent } from './showcustomer/showcustomer.component';
import { PurchasrorderComponent } from './purchasrorder/purchasrorder.component';
import { GrnComponent } from './grn/grn.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = 
  [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path : 'login' , component : LoginComponent },

  {
    path: 'dashboard', component: StructureComponent,
    children: [
          {
            path: 'addcustomer', component: AddcustomerComponent,
          },
          {
            path: 'showcustomer', component: ShowcustomerComponent,
          },
          {
            path: 'purchaseorder', component: PurchasrorderComponent,
          },
          {
            path: 'grn', component: GrnComponent,
          },
          {
            path: 'sales', component: SalesComponent,
          }

]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
