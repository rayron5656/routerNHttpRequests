import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router,RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { UsersComponent } from './users/users.component';


const myWebsiteRoutes:Routes = [
  {path:'',component:DogsComponent},
  {path:'cats',component:CatsComponent},
  {path:'users',component:UsersComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    CatsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(myWebsiteRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
