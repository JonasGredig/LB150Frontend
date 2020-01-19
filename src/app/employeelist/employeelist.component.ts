import { Component, OnInit } from '@angular/core';
import {Employee} from '../shared/employee';
import {Department} from '../shared/department';
import {RestService} from '../shared/rest.service';



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
  dataSource: Employee[];

  departments: Department[] = departmentslool;

  constructor(private api: RestService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    return this.api.getEmployees()
      .subscribe(employees => this.dataSource = employees);
  }

}
