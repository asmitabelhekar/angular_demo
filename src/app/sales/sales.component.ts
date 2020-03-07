import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  countries: any[];

    selectedCountry: any;

    constructor() {
        this.countries = [
            {name: 'USA', flag: 'usa.png'},
            {name: 'Germany', flag: 'germany.png'},
            {name: 'Japan', flag: 'japan.png'}
        ];
    }
  ngOnInit() {
  }

}
