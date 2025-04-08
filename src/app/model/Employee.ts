export class EmployeeModel {

    public empId: number;
    public name: string;;
    public city: string;
    public state: string;
    public emailId: string;
    public contactNumber: string;
    public pinCode: string;
    public address: string;


  constructor() {
    this.empId = 0;
    this.name = '';
    this.city = '';
    this.state = '';
    this.emailId = '';
    this.contactNumber = '';
    this.pinCode = '';
    this.address = '';
  }
}