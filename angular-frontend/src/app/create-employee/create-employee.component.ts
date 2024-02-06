// import { Component, OnInit } from '@angular/core';
// import { Employee } from '../employee';
// import { EmployeeService } from '../employee.service';
// import { Router } from '@angular/router';

// import { HttpClient } from '@angular/common/http';
//  import { Injectable } from '@angular/core';
//  import { Subject } from 'rxjs';

// @Component({
//   selector: 'app-create-employee',
//   templateUrl: './create-employee.component.html',
//   styleUrls: ['./create-employee.component.css']
// })
// export class CreateEmployeeComponent implements OnInit {

//   employee: Employee = new Employee();
//   public loginStatusSubject = new Subject<boolean>();
//   constructor(private employeeService: EmployeeService,
//     private router: Router,private http: HttpClient) { }

//   ngOnInit(): void {
//   }

//   saveEmployee(){
//     this.employeeService.createEmployee(this.employee).subscribe( data =>{
//       console.log(data);
//       this.employeeService.loginUser(data);

//      // this.goToEmployeeList();
//     },
//     error => console.log(error));
//   }

//   goToEmployeeList(){
//     this.router.navigate(['/employees']);
//   }
  
//   onSubmit(){
//     console.log(this.employee);
//     this.saveEmployee();
//   }
// }

// // this is  starting for loginService



// // import { HttpClient } from '@angular/common/http';
// // import { Injectable } from '@angular/core';
// // import { Subject } from 'rxjs';
// // import baseUrl from './helper';

// // @Injectable({
// //   providedIn: 'root',
// // })
// // export class LoginService {
// //   public loginStatusSubject = new Subject<boolean>();

// //   constructor(private http: HttpClient) {}

// //   //current user: which is loggedin
// //   public getCurrentUser() {
// //     return this.http.get(`${baseUrl}/current-user`);
// //   }


// // }
//   //generate token

// //   public generateToken(loginData: any) {
// //     return this.http.post(`${baseUrl}/generate-token`, loginData);
// //   }

// //   login user: set token in localStorage
// //   public loginUser(token) {
// //     localStorage.setItem('token', token);

// //     return true;
// //   }

// //   //isLogin: user is logged in or not
// //   public isLoggedIn() {
// //     let tokenStr = localStorage.getItem('token');
// //     if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
// //       return false;
// //     } else {
// //       return true;
// //     }
// //   }

// //   // logout : remove token from local storage
// //   public logout() {
// //     localStorage.removeItem('token');
// //     localStorage.removeItem('user');
// //     return true;
// //   }

// //   //get token
// //   public getToken() {
// //     return localStorage.getItem('token');
// //   }

// //   //set userDetail
// //   public setUser(user) {
// //     localStorage.setItem('user', JSON.stringify(user));
// //   }

// //   //getUser
// //   public getUser() {
// //     let userStr = localStorage.getItem('user');
// //     if (userStr != null) {
// //       return JSON.parse(userStr);
// //     } else {
// //       this.logout();
// //       return null;
// //     }
// //   }

// //   //get user role

// //   public getUserRole() {
// //     let user = this.getUser();
// //     return user.authorities[0].authority;
// //   }
// // }


//   --- 128 to 172 correct

// import { EmployeeService } from '../employee.service';
// import { Employee } from '../employee';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-create-employee',
//   templateUrl: './create-employee.component.html',
//   styleUrls: ['./create-employee.component.css']
// })
// export class CreateEmployeeComponent implements OnInit {

//   employee: Employee = new Employee();
//   submitted = false;

//   constructor(private employeeService: EmployeeService,
//     private router: Router) { }

//   ngOnInit() {
//   }

//   newEmployee(): void {
//     this.submitted = false;
//     this.employee = new Employee();
//   }

//   save() {
//     this.employeeService.createEmployee(this.employee)
//       .subscribe(data => console.log(data), error => console.log(error));
//     this.employee = new Employee();
//     this.gotoList();
//   }

//   onSubmit() {
//     this.submitted = true;
//     this.save();    
//   }

//   gotoList() {
//     this.router.navigate(['/employees']);
//   }
// }

//   ----- line 171 is correct code before

// import { EmployeeService } from '../employee.service';
// import { Employee } from '../employee';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-create-employee',
//   templateUrl: './create-employee.component.html',
//   styleUrls: ['./create-employee.component.css']
// })
// export class CreateEmployeeComponent implements OnInit {

//   newEmployee(): void {
//     this.submitted = false;
//     this.employee = new Employee(); // Assuming Employee is your model class
//   }

//   employee: Employee = new Employee();
//   submitted = false;

//   constructor(private employeeService: EmployeeService, private router: Router) { }

//   ngOnInit() {
//   }

//   resetForm(): void {
//     this.submitted = false;
//     this.employee = new Employee();
//   }

//   saveEmployee(): void {
//     this.employeeService.createEmployee(this.employee)
//       .subscribe(
//         data => {
//           console.log("Employee created successfully:", data);
//           this.resetForm();
//           this.gotoList();
//         },
//         error => {
//           console.error("Error creating employee:", error);
//           // Handle error, e.g., show a user-friendly message
//         }
//       );
//   }

//   onSubmit(): void {
//     this.submitted = true;
//     this.saveEmployee();
//   }

//   gotoList(): void {
//     this.router.navigate(['/employees']);
//   }
// }


//  --line above code is before addding employeesDetails

// import { EmployeeService } from '../employee.service';
// import { Employee } from '../employee';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-create-employee',
//   templateUrl: './create-employee.component.html',
//   styleUrls: ['./create-employee.component.css']
// })
// export class CreateEmployeeComponent implements OnInit {

//   employee: Employee = new Employee();
//   submitted = false;

//   constructor(private employeeService: EmployeeService, private router: Router) { }

//   ngOnInit() {
//   }

//   resetForm(): void {
//     this.submitted = false;
//     this.employee = new Employee();
//   }

//   saveEmployee(): void {
//     this.employeeService.createEmployee(this.employee)
//       .subscribe(
//         data => {
//           console.log("Employee created successfully:", data);
//           this.resetForm();
//           this.gotoList();
//         },
//         error => {
//           console.error("Error creating employee:", error);
//           // Handle error, e.g., show a user-friendly message
//         }
//       );
//   }

//   onSubmit(): void {
//     this.submitted = true;
//     this.saveEmployee();
//   }

//   gotoList(): void {
//     this.router.navigate(['/employees']);
//   }

//   newEmployee(): void {
//     this.submitted = false;
//     this.employee = new Employee();
//   }
// }

// import { EmployeeService } from '../employee.service';
// import { Employee } from '../employee';
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-create-employee',
//   templateUrl: './create-employee.component.html',
//   styleUrls: ['./create-employee.component.css']
// })
// export class CreateEmployeeComponent implements OnInit {

//   employee: Employee = new Employee();
//   submitted = false;

//   constructor(private employeeService: EmployeeService,
//     private router: Router) { }

//   ngOnInit() {
//   }

//   newEmployee(): void {
//     this.submitted = false;
//     this.employee = new Employee();
//   }

//   saveEmployee() {
//     this.employeeService.createEmployee(this.employee)
//       .subscribe(
//         (data: Employee) => {
//           console.log('Employee created successfully:', data);
//           this.employee = new Employee();
//           this.gotoList();
//         },
//         (error) => {
//           console.error('Error creating employee:', error);
//           // Handle error, e.g., show a user-friendly message
//         }
//       );
//   }

//   onSubmit() {
//     this.submitted = true;
//     this.saveEmployee();
//   }

//   gotoList() {
//     this.router.navigate(['/employees']);
//   }
// }

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDetails } from '../EmployeeDetails';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
    this.employee.empDetils = new EmployeeDetails(); // Ensure empDetils is initialized
  }



  saveEmployee() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(
        (data: Employee) => {
          console.log('Employee created successfully:', data);
          this.employee = new Employee();
          this.gotoList();
        },
        (error) => {
          console.error('Error creating employee:', error);
          // Handle error, e.g., show a user-friendly message
        }
      );
  }

  onSubmit() {
    this.submitted = true;
    this.saveEmployee();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}

