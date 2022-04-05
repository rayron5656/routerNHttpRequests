import { Component, OnInit } from '@angular/core';
import { MyHTTPService } from '../my-http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any =[];

  constructor(private _myHttp:MyHTTPService) { 
    _myHttp.getUsers().subscribe((U) => this.users = U);
  }

  ngOnInit(): void {
  }

 
}
