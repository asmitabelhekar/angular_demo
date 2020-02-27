import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApicallService } from '../services/apicall.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  userModel: any = {};
  getData: any;
  mobieNumber: any;
  checkStatus: any = "add";
  customerId: any;
  url: any;
  getId: any;
  getCustomerDetailInfo: any;
  recordStatus : any;

  constructor(public apiCall: ApicallService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.getId = localStorage.getItem('customerId');
    if (this.getId == null || this.getId == "" || this.getId == undefined) {
      this.recordStatus = "add" ;
    } else {
      this.recordStatus = "update" ;
      this.getCustomerDetail(this.getId);
    }

  }

  async addCustomerData() {
    let send_date = {};
    this.mobieNumber = this.userModel['mobile'];

    send_date['firstName'] = this.userModel['fname'];
    send_date['lastName'] = this.userModel['lname'];
    send_date['mobile'] = this.mobieNumber.toString();
    send_date['address'] = this.userModel['address'];
    if (this.userModel['note'] != "") {
      send_date['note'] = this.userModel['note'];
    }
    if (this.userModel['email'] != "") {
      send_date['email'] = this.userModel['email'];
    }
    send_date['isActive'] = 1;

    if (this.recordStatus == "add") {

      this.url = environment.base_url + "customers"

      this.apiCall.postWAu(this.url, send_date).subscribe(MyResponse => {
        console.log("MyResponse ", MyResponse);

        let msg = MyResponse['message'];

        //  this.presentToast(msg);
      }, error => {

        console.log(error.error.message);

      })
    } else if (this.recordStatus == "update") {
      this.url = environment.base_url + "customers/" + this.getId;

      this.apiCall.put(this.url, send_date).subscribe(MyResponse => {
        console.log("MyResponse ", MyResponse);

        let msg = MyResponse['message'];

      }, error => {

        console.log(error.error.message);
      })
    } else {
    }
  }
  // async presentToast(msg) {
  //     const toast = await this.toastcontroller.create({
  //       message: msg,
  //       duration: 4000
  //     });
  //     toast.present();
  //   }

  getCustomerDetail(id) {
    let url = environment.base_url + "customers/" + id;
    console.log("url :" + url);
    this.apiCall.get(url).subscribe(MyResponse => {
      this.getCustomerDetailInfo = MyResponse['result'];
      this.userModel['fname'] = this.getCustomerDetailInfo.firstName;
      this.userModel['lname'] = this.getCustomerDetailInfo.lastName;
      this.userModel['mobile'] = this.getCustomerDetailInfo.mobile;
      this.userModel['address'] = this.getCustomerDetailInfo.address;
      this.userModel['note'] = this.getCustomerDetailInfo.note;


      console.log("success:" + this.getCustomerDetailInfo);
    },
      error => {

      })
  }
}
