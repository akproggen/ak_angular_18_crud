export class EmployeeModel {

    public empId: number;
    public name: string;;
    public city: string;
    public state: string;
    public emailId: string;
    public contactNo: string;
    public address: string;


  constructor(
    empId: number,
    name: string,
    city: string,
    state: string,
    emailId: string,
    contactNo: string,
    address: string
  ) {
    this.empId = empId;
    this.name = name;
    this.city = city;
    this.state = state;
    this.emailId = emailId;
    this.contactNo = contactNo;
    this.address = address;
  }
}