import { Component, OnInit } from '@angular/core';
import {Employee} from '../shared/employee';

const ELEMENT_DATA: Employee[] = [
  {id: 1, firstName: 'Jonas', lastName: 'Gredig', departmentId: 1, email: 'jongredig@gmail.com', votes:  0},
  {id: 1, firstName: 'Peter', lastName: 'Silie', departmentId: 1, email: 'Peterli@gmail.com', votes:  5},
  {id: 1, firstName: 'Hans', lastName: 'Gredig', departmentId: 1, email: 'hasniii@gmail.com', votes:  0},
  {id: 1, firstName: 'Lara', lastName: 'Petto', departmentId: 1, email: 'huhu123455@gmail.com', votes:  0},

];

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'departmentId', 'email', 'votes'];
  dataSource: Employee[] = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
