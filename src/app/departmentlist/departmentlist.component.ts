import {Component, OnInit} from '@angular/core';
import {Department} from '../shared/department';

const ELEMENT_DATA: Department[] = [
  {id: 1, name: 'Geschäfftsleitung', division: 'G'},
  {id: 2, name: 'HR', division: 'GH'},
  {id: 3, name: 'IT', division: 'GI'},
  {id: 4, name: 'Recht', division: 'GR'},
];


@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'division', 'deleteButton'];
  dataSource: Department[] = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
