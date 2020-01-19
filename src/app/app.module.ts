import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeelistComponent} from './employeelist/employeelist.component';
import {DepartmentlistComponent} from './departmentlist/departmentlist.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatSliderModule, MatTableModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    DepartmentlistComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
