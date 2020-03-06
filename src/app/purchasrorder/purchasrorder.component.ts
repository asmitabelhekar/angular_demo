import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-purchasrorder',
  templateUrl: './purchasrorder.component.html',
  styleUrls: ['./purchasrorder.component.css']
})
export class PurchasrorderComponent implements OnInit {

  getDetail: any;
  getAllFieldsRecord: any = [];
  recordModel: any = {};
  userModel: any = {};
  
  constructor(public apiCall: ApicallService) { }

  url = "http://www.mocky.io/v2/5e620a5e3000002a004d56bc";
  ngOnInit() {

    this.getCustomerDetailInfo();
  }

  getCustomerDetailInfo() {
    // let url = environment.base_url + "customers";
    console.log("url :" + this.url);
    this.apiCall.get(this.url).subscribe(MyResponse => {
      this.getDetail = MyResponse;
      this.userModel['name'] = this.getDetail.fullName;
      this.userModel['mobile'] = this.getDetail.mobile;
      this.userModel['email'] = this.getDetail.email;
      this.userModel['address'] = this.getDetail.address;

      console.log("success:" + this.getDetail);
    },
      error => {

      })
  }

  addMore() {
    let objjj = {
      "product_name": this.recordModel['product'],
      "product_price": this.recordModel['price'],
      "product_quantity": this.recordModel['quantity'],
      "product_total_price": this.recordModel['totalprice'],
      "product_gst": this.recordModel['gst'],
      "product_final_price": this.recordModel['finalprice'],

    };

    this.getAllFieldsRecord.push(objjj);
  }
}
