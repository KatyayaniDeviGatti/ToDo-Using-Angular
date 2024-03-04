import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() navbarlinks:any;
  constructor(private route:Router){}

  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/')

  }
}
