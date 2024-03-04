import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../components/register/config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  validateUser(userName:any,password:any){
   return  this.http.get(`${baseUrl}/registration?UserName=`+userName+"&Password="+password)
  }
}
