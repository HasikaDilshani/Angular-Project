import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersons: SalesPerson[] = [
    new SalesPerson("Has","Dil","hd@gmail.com",30000),
    new SalesPerson("Pam","Jay","pj@gmail.com",40000),
    new SalesPerson("Niv","REm","nr@gmail.com",50000)
  
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
