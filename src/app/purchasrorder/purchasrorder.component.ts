import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApicallService } from '../services/apicall.service';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-purchasrorder',
  templateUrl: './purchasrorder.component.html',
  styleUrls: ['./purchasrorder.component.css']
})
export class PurchasrorderComponent implements OnInit {

  checkFlagForUpdate: any = 1;

  displayFinalAmount : any;
  getDetail: any;
  getAllFieldsRecord: any = [];
  recordModel: any = {};
  userModel: any = {};
  customername = [
    { "name": "Asmita Belhekar" },
    { "name": "Asmita Belhekar" },
    { "name": "Asmita Belhekar" },
  ];

  products = [
    { "p_name": "abcd" },
    { "p_name": "bbbbbbbb" },
    { "p_name": "cccccccc" },
    { "p_name": "ddddddd" },
    { "p_name": "eeeeee" },
    { "p_name": "fffffffff" },
    { "p_name": "ggggggggg" },
    { "p_name": "hhhhhhhhh" },
    { "p_name": "iiiiiiiiii" },
    { "p_name": "jjjjjjjjjj" },
    { "p_name": "kkkkkk" },
    { "p_name": "llllllll" },
    { "p_name": "mmmmmmmmm" },
    { "p_name": "nnnnnnn" },
    { "p_name": "ooooooooo" },
    { "p_name": "ppppppp" },
    { "p_name": "qqqqqqqq" },

  ];
  today: any;

  constructor(public apiCall: ApicallService,
    public dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale("en-GB");
  }

  url = "http://www.mocky.io/v2/5e620a5e3000002a004d56bc";
  ngOnInit() {
    this.userModel['date'] = new Date().toJSON().split('T')[0];
    this.today = new Date().toJSON().split('T')[0];
    // this.getCustomerDetailInfo();
  }

  getCustomerDetailInfo(name) {
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

    if (this.recordModel['name'] == "" || this.recordModel['price'] == "" || this.recordModel['quantity'] == "" || this.recordModel['totalprice'] == "" ||
      this.recordModel['gst'] == "" || this.recordModel['finalprice'] == "" || this.recordModel['name'] == undefined || this.recordModel['price'] == undefined || this.recordModel['quantity'] == undefined || this.recordModel['totalprice'] == undefined ||
      this.recordModel['gst'] == undefined || this.recordModel['finalprice'] == undefined) {
      alert("Please fill all fields.")
    } else {
      let objjj = {
        "product_name": this.recordModel['name'],
        "product_price": this.recordModel['price'],
        "product_quantity": this.recordModel['quantity'],
        "product_total_price": this.recordModel['totalprice'],
        "product_gst": this.recordModel['gst'],
        "product_final_price": this.recordModel['finalprice'],

      };

      if (this.checkFlagForUpdate == 1) {
        this.getAllFieldsRecord.push(objjj);
      } else {
        let getIndex = localStorage.getItem('arrayIndex');
        this.getAllFieldsRecord[getIndex] = {
          "product_name": this.recordModel['name'],
          "product_price": this.recordModel['price'],
          "product_quantity": this.recordModel['quantity'],
          "product_total_price": this.recordModel['totalprice'],
          "product_gst": this.recordModel['gst'],
          "product_final_price": this.recordModel['finalprice'],
        };
        this.checkFlagForUpdate = 1;
      }
      this.displayFinalAmount = 0;
      for(let i=0; i< this.getAllFieldsRecord.length;i++){
        this.displayFinalAmount =  this.displayFinalAmount + this.getAllFieldsRecord[i]['product_final_price'];
      }
      this.recordModel['name'] = "";
      this.recordModel['price'] = "";
      this.recordModel['quantity'] = "";
      this.recordModel['totalprice'] = "";
      this.recordModel['gst'] = "";
      this.recordModel['finalprice'] = "";
    }


  }

  updateProduct(index, data) {
    this.checkFlagForUpdate = 0;
    localStorage.setItem("arrayIndex", index);
    console.log("update record:" + index + "   show data :: " + data);
    this.recordModel['name'] = data.product_name;
    this.recordModel['price'] = data.product_price;
    this.recordModel['quantity'] = data.product_quantity;
    this.recordModel['totalprice'] = data.product_total_price;
    this.recordModel['gst'] = data.product_gst;
    this.recordModel['finalprice'] = data.product_final_price;
    this.displayFinalAmount = 0;
    for(let i=0; i< this.getAllFieldsRecord.length;i++){
      this.displayFinalAmount =  this.displayFinalAmount + this.getAllFieldsRecord[i]['product_final_price'];
    }
  }

  deleteProduct(index) {
    for (var i = 0; i < this.getAllFieldsRecord.length; i++) {
      if (i == index) {
        this.getAllFieldsRecord.splice(i, 1);
      }
    }
    this.displayFinalAmount = 0;
    for(let i=0; i< this.getAllFieldsRecord.length;i++){
      this.displayFinalAmount =  this.displayFinalAmount + this.getAllFieldsRecord[i]['product_final_price'];
    }

  }
  getProductDetailInfo(name) {
    this.recordModel['name'] = name;
  }

  totalAmount(event: any) {
    if (this.recordModel['price'] == null || this.recordModel['price'] == undefined || this.recordModel['price'] == "") {

    } else {
      if (this.recordModel['quantity'] == null || this.recordModel['quantity'] == undefined || this.recordModel['quantity'] == "") {
      } else {
        this.recordModel['totalprice'] = this.recordModel['price'] * this.recordModel['quantity'];
      }
    }

  }


  finalAmount(event: any) {
    if (this.recordModel['totalprice'] == null || this.recordModel['totalprice'] == undefined || this.recordModel['totalprice'] == "") {

    } else {
      if (this.recordModel['gst'] == null || this.recordModel['gst'] == undefined || this.recordModel['gst'] == "") {
      } else {
        let getGst = this.recordModel['totalprice'] * (this.recordModel['gst'] / 100);
        this.recordModel['finalprice'] = this.recordModel['totalprice'] + getGst;
      }
    }
  }


}
