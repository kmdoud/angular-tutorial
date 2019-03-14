import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  firstname:string = "Kenneth";
  lastname:string = "Doud";

  name: string = this.firstname;


  namebutton(): void
  {
    this.name =  (this.name == this.firstname) ? this.lastname : this.firstname;
  }

  ngOnInit() {
  }

}
