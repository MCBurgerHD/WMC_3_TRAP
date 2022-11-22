import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorldPipe';
  yname = "";
  output = "";
  hello = "Hello";
  hallo = "Hallo";
  gruessgott = "Grüß Gott";
  servus = "Servus";
  greeting = "";

  onSelected(value:string): void {
    this.greeting = value;
  }

  say() {
    if (this.yname != null) {
      this.output = this.greeting + this.yname;
    }
  }
}
