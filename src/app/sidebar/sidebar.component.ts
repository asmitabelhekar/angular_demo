import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

   detailData = {
    firstName : "",
    lastName : "",
    mobile : "",
    address : "",
    note : "",
    status : "add"
  }
  menuItems = [
    {
      icon: 'dashboard',
      name: 'Customers',
      url: '/dashboard/showcustomer'
    },
    {
      icon: 'description',
      name: 'Add Customer',
      url: '/dashboard/addcustomer'
    },
    {
      icon: 'description',
      name: 'Purchase Order',
      url: '/dashboard/purchaseorder'
    },
    {
      icon: 'description',
      name: 'GRN',
      url: '/dashboard/grn'
    },
    {
      icon: 'description',
      name: 'Sales',
      url: '/dashboard/sales'
    }
  ]
  constructor() { }

  ngOnInit() {
    let id;
    localStorage.setItem("customerId" , id);

  }

}
