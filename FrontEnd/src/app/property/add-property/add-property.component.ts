import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('fromTabs') fromTabs: TabsetComponent;

  propertyTypes: Array<any> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<any> = ['Fully', 'Semi', 'Unfurnished'];
  moveTypes: Array<any> = ['Yes', 'No'];
  gatedTypes: Array<any> = ['Yes', 'No'];
  entranceTypes: Array<any> = ['North', 'East', 'South', 'West'];

  propertyView: IPropertyBase = {
    Id: null,
    Name: null,
    Price: null,
    SellRent: null,
    PType: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    RTM: null,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  selectTab(tabId: number): void {
    this.fromTabs.tabs[tabId].active = true;
  }

  onBack(): void {
    this.router.navigate(['/']);
  }

  onSumbit(Form: NgForm): void {
    console.log(Form);
  }
}
