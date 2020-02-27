import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.component.html',
  styleUrls: ['./showcustomer.component.css']
})
export class ShowcustomerComponent implements OnInit {

  getCusstomers: any;
  customerId: any;

  constructor(public apiCall: ApicallService,
    public router: Router
  ) {
    this.getCustomerList();
  }
  getCustomerList() {
    let url = environment.base_url + "customers";
    console.log("url :" + url);
    this.apiCall.get(url).subscribe(MyResponse => {
      this.getCusstomers = MyResponse['result']['list'];
      console.log("success:" + this.getCusstomers);
    },
      error => {

      })
  }
  ngOnInit() {
  }

  deteteRecord(id) {
    let url = environment.base_url + "customers/" + id;
    this.apiCall.delete(url).subscribe(MyResponse => {
      alert("Record deleted successfully.");
      console.log("success:" + this.getCusstomers);
      this.getCustomerList();
    },
      error => {
        alert("Record not deleted.");
      })
  }


  updateRecord(id) {
   localStorage.setItem("customerId" , id);
    this.router.navigate(['/dashboard/addcustomer']);
  }
}
