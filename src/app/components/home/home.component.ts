import { Component,Input } from '@angular/core';
import { Logout } from '../register/config';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  toDoObj:any={
    id:'',
    task : ''
  }

  clear(){
    this.toDoObj={
      task : ''
    }
  }
  @Input() navbarlinks:any;
  logout:any = Logout;

  addBtn:boolean = true;
  updateBtn:boolean = false;

  constructor(private todo:TodoService){}

  addTask(){
    this.todo.postTask(this.toDoObj).subscribe(
      (data:any)=>{
        console.log(data);
        this.getTaskData();
        this.clear();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

  ngOnInit(){
    this.getTaskData();
  }

  taskData:any = [];
  getTaskData(){
    this.todo.getTask().subscribe(
      (data:any)=>{
        console.log(data);
        this.taskData = data;
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }

  deleteTask(id:any){
    this.todo.deleteTask(id).subscribe(
      (data:any)=>{
        console.log(data);
        this.getTaskData();
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

  updateData(data:any){
    this.addBtn = false;
    this.updateBtn = true;
    this.toDoObj = {
      id:data.id,
      task:data.task
    }
  }

  updateTask(){
    this.todo.updateTask(this.toDoObj.id,this.toDoObj).subscribe(
      (data:any)=>{
        this.addBtn = true;
        this.updateBtn = false;
        console.log(data)
        this.getTaskData();
        this.clear()
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
}
