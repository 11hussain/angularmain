// export class Employee {
//   id?: number;
//   itemName?:String;
//   quantity?:number;
// price?: number;
// total?:number

//   emailId?: string;
//   empDetils?: EmployeeDetails;
// }

export class Employee {
  id?: number;
  itemName?: string;
  quantity?: number;
  price?: number;
  total?: number;
  emailId?: string;
  empDetils?: EmployeeDetails;

  constructor() {
    this.empDetils = new EmployeeDetails();
  }
}

export class EmployeeDetails {
  // Define properties for EmployeeDetails if needed
  id?: number;
  employeeDetails_Id?: string;
  street?: string;
  state?: string;
}

  
