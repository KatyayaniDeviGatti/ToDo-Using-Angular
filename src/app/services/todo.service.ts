import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../components/register/config';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  postRegisterData(data:any){
    return this.http.post(`${baseUrl}/registration`,data);
  }

  postTask(data:any){
    return this.http.post(`${baseUrl}/todo`,data);
  }

  getTask(){
    return this.http.get(`${baseUrl}/todo`)
  }

  deleteTask(id:any){
    return this.http.delete(`${baseUrl}/todo/`+id);
  }

  updateTask(id:any,data:any){
    return this.http.put(`${baseUrl}/todo/`+id,data);
  }
}
