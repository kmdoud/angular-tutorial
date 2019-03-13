import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //points to html
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular 7';
  subtitle: string = 'From .NET bootcamp 5';

  inputTxt:string = "default input text";

  changebutton(txt:string): void 
  {
    this.title = txt;

  }
}
