import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8082/api/v1/employees";
 // private baseURL = "http://localhost:8082/authenticate";

  public loginStatusSubject?: boolean;

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    //return this.httpClient.post(`${this.baseURL}`, employee);
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  getEmployee(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  // public getCurrentUser() {
  //   return this.httpClient.get(`${this.baseURL}/current-user`);
  // }

  // public loginUser() {
  //       localStorage.setItem('token', data.token?:any);
    
  //        return true;
  //      }
}



// -- login Service Start

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// import baseUrl from './helper';

// @Injectable({
//   providedIn: 'root',
// })
// export class LoginService {
//   public loginStatusSubject = new Subject<boolean>();

//   constructor(private http: HttpClient) {}

  //current user: which is loggedin
  // public getCurrentUser() {
  //   return this.http.get(`${baseUrl}/current-user`);
  // }

  //generate token

//   public generateToken(loginData: any) {
//     return this.http.post(`${baseUrl}/generate-token`, loginData);
//   }

//   //login user: set token in localStorage
//   public loginUser(token) {
//     localStorage.setItem('token', token);

//     return true;
//   }

//   //isLogin: user is logged in or not
//   public isLoggedIn() {
//     let tokenStr = localStorage.getItem('token');
//     if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//   // logout : remove token from local storage
//   public logout() {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     return true;
//   }

//   //get token
//   public getToken() {
//     return localStorage.getItem('token');
//   }

//   //set userDetail
//   public setUser(user) {
//     localStorage.setItem('user', JSON.stringify(user));
//   }

//   //getUser
//   public getUser() {
//     let userStr = localStorage.getItem('user');
//     if (userStr != null) {
//       return JSON.parse(userStr);
//     } else {
//       this.logout();
//       return null;
//     }
//   }

//   //get user role

//   public getUserRole() {
//     let user = this.getUser();
//     return user.authorities[0].authority;
//   }
// }

