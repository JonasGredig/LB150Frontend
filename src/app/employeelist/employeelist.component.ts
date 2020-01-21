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

const ELEMENT_DATA: Employee[] = [
  {id: 1, departmentId: 1, email: 'jongredig@gmail.com', firstName: 'Jonas', lastName: 'Gredig', votes: 1},
  {id: 2, departmentId: 1, email: 'lal@gmail.com', firstName: 'Lara', lastName: 'Peterli', votes: 5},
  {id: 3, departmentId: 2, email: 'HansBeerig@gmail.com', firstName: 'Hans', lastName: 'Beerig', votes: 0},

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

  constructor(private api: RestService) { }

  ngOnInit() {
    //this.getEmployees();
    //this.getDepartments();
  }

  getEmployees() {
    return this.api.getEmployees()
      .subscribe(employees => this.dataSource = employees);
  }

  getDepartments() {
    return this.api.getDepartments()
      .subscribe(departments => this.departments = departments);
  }

  likeEmployee(id: number) {
    this.api.likeEmployee(id).subscribe();
  }

}
