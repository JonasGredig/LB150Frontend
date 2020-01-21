import {Component, OnInit} from '@angular/core';
import {Department} from '../shared/department';
import {RestService} from "../shared/rest.service";


@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'division'];
  dataSource: Department[];

  constructor(private api: RestService) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments() {
    return this.api.getDepartments()
      .subscribe(departments => this.dataSource = departments);
  }

}
