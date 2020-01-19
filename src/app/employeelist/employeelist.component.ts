import { Component, OnInit } from '@angular/core';
import {Employee} from '../shared/employee';
import {Department} from '../shared/department';

const ELEMENT_DATA: Employee[] = [
  {id: 1, firstName: 'Jonas', lastName: 'Gredig', departmentId: 1, email: 'jongredig@gmail.com', votes:  0},
  {id: 2, firstName: 'Peter', lastName: 'Silie', departmentId: 1, email: 'Peterli@gmail.com', votes:  5},
  {id: 3, firstName: 'Hans', lastName: 'Gredig', departmentId: 1, email: 'hasniii@gmail.com', votes:  0},
  {id: 4, firstName: 'Lara', lastName: 'Petto', departmentId: 1, email: 'huhu123455@gmail.com', votes:  0},

];

const departmentslool: Department[] = [
  {id: 1, name: 'Geschäftsleitung', division: 'G'},
  {id: 2, name: 'HR', division: 'GH'},
  {id: 3, name: 'IT', division: 'GI'},
  {id: 4, name: 'Recht', division: 'GR'},
];

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'departmentId', 'email', 'votes', 'deleteButton'];
  dataSource: Employee[] = ELEMENT_DATA;

  departments: Department[] = departmentslool;

  constructor() { }

  ngOnInit() {
  }

}
