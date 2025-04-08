import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeModel } from './model/Employee';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
editEmployee(_t25: EmployeeModel) {
  const oldData = localStorage.getItem('empData');
  if(oldData) {
    const parseData = JSON.parse(oldData);
    this.employeeList = parseData;
    const index = this.employeeList.findIndex((e: EmployeeModel) => e.empId === _t25.empId);
    this.employeeList[index] = _t25;
    localStorage.setItem('empData', JSON.stringify(this.employeeList));
  }
  this.employeeForm.controls['empId'].setValue(_t25.empId);
}
deleteEmployee(arg0: number) {
  const oldData = localStorage.getItem('empData');
  if(oldData) {
    const parseData = JSON.parse(oldData);
    this.employeeList = parseData;
    this.employeeList.splice(arg0, 1);
    localStorage.setItem('empData', JSON.stringify(this.employeeList));
  }   

}

  employeeList: EmployeeModel[] = [];

  newEmployee: EmployeeModel = new EmployeeModel();

  employeeForm: FormGroup = new FormGroup({});
  

  constructor() {


    this.createForm();
    const oldData = localStorage.getItem('empData');
    if(oldData) {
      const parseData = JSON.parse(oldData);
      this.employeeList = parseData;
    }

  }
  
  createForm() {
    this.employeeForm = new FormGroup({ 
      empId: new FormControl(this.newEmployee.empId),
      name: new FormControl(this.newEmployee.name),
      city: new FormControl(this.newEmployee.city),
      state: new FormControl(this.newEmployee.state),
      emailId: new FormControl(this.newEmployee.emailId),
      contactNumber: new FormControl(this.newEmployee.contactNumber),
      pinCode: new FormControl(this.newEmployee.pinCode),
      address: new FormControl(this.newEmployee.address)
    });
  }

  onSave() {
    const oldData = localStorage.getItem('empData');
    if(oldData) {
      const parseData = JSON.parse(oldData);
      this.employeeForm.controls['empId'].setValue(parseData.length + 1);
      this.employeeList.unshift(this.employeeForm.value);
    }else {
      this.employeeList.unshift(this.employeeForm.value);
      
    }
    localStorage.setItem('empData', JSON.stringify(this.employeeList));
  }

  addEmployee() {
    throw new Error('Method not implemented.');
  }

}
