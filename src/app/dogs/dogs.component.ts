import { Component, OnInit } from '@angular/core';
import { MyHTTPService } from '../my-http.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  constructor(private _myHttp:MyHTTPService) { }

  dogPic:string = '';

  ngOnInit(): void {
  }

  getDogImg(){
    this._myHttp.getDogs().subscribe((dog) => console.log(dog));
  }

}
