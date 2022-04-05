import { Component, OnInit } from '@angular/core';
import { MyHTTPService } from '../my-http.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  catFacts:any = [];

  constructor(private _myHttp:MyHTTPService) {
    this._myHttp.getCats().subscribe((cat) => this.catFacts = cat );
   }

  ngOnInit(): void {
    
  }
  

}
