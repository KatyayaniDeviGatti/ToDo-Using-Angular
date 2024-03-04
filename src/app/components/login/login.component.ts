import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LogIn} from '../register/config';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginObj:any={
    userName:"",
    password:""
  }

  LogIn:any = LogIn

  constructor(private login:LoginService,private route:Router){}

  loginUser(){
     this.login.validateUser(this.loginObj.userName,this.loginObj.password).subscribe(
      (data:any)=>{
        console.log(data);
        if(data.length>0){
          console.log(data)
          localStorage.setItem("user",data[0].id)
          this.route.navigate(["/home"])
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Credentials!'
           
          })
        }
      },
      (error:any)=>{
        console.log("Wrong Credentials")
        console.log(error)
      }
    )
  }
}
