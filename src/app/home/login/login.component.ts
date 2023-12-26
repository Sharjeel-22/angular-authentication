import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private helperService:ServiceService,private router:Router){}

  ngOnInit(): void {
      
  }
  onSubmit():void {
    this.router.createUrlTree(['/dashboard']);
  }
}
