import {Component, OnInit} from '@angular/core';
import {Department} from '../shared/department';
import {RestService} from "../shared/rest.service";
import {Employee} from "../shared/employee";



@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'division'];
  dataSource: Department[];
  private division: string;
  private name: string;


  constructor(private api: RestService) { }

  ngOnInit() {
    this.getDepartments();
  }

  addDepartment() {
    let department: Department = new Department();
    department.name = this.name;
    department.division = this.division;

    this.api.addDepartment(department).subscribe();
  }

  getDepartments() {
    return this.api.getDepartments()
      .subscribe(departments => this.dataSource = departments);
  }

}
