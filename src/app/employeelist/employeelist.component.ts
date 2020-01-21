import { Component, OnInit } from '@angular/core';
import {Employee} from '../shared/employee';
import {Department} from '../shared/department';
import {RestService} from '../shared/rest.service';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'departmentId', 'email', 'votes', 'deleteButton'];
  dataSource: Employee[];

  departments: Department[];

  constructor(private api: RestService) { }

  ngOnInit() {
    this.getEmployees();
    this.getDepartments();
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
