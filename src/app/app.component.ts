import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-autication';
  constructor(private helperService:ServiceService){}


  ngOnInit():void {
    this.helperService.userRole$.next('admin');
    console.log("role set")
  }
}
