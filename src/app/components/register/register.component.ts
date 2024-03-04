import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { LogIn } from './config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  signUpform:FormGroup;

  LogIn:any = LogIn
  
  constructor(private todo:TodoService){
    this.signUpform = new FormGroup({
      FirstName : new FormControl(),
      LastName : new FormControl(),
      Profession : new FormControl(),
      UserName : new FormControl(),
      Password : new FormControl()
    })
  }

  formDetails:any = [];
  formData(data:any){
    this.formDetails.push(data);
  }

  signUpData:any;
  signUp(data:any){
    this.formData(data);
    this.todo.postRegisterData(this.signUpform.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.signUpform.reset()
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }

  
}
